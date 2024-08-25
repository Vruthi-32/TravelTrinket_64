import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import zxcvbn from 'zxcvbn';
import { useAuth } from './hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
username: Yup.string().required('Username is required'),
password: Yup.string()
.min(8, 'Password must be at least 8 characters long')
.required('Password is required'),
phoneNumber: Yup.string()
.matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
.required('Phone number is required'),
email: Yup.string().email('Invalid email address').required('Email is required'),
});

const initialValues = {
username: '',
password: '',
phoneNumber: '',
email: '',
rememberMe: false,
};

const Login = () => {
const { login } = useAuth(); 
const [passwordVisible, setPasswordVisible] = useState(false);
const [password, setPassword] = useState('');
const [successMessage, setSuccessMessage] = useState('');
const navigate = useNavigate();

const handlePasswordChange = (e, setFieldValue) => {
const value = e.target.value;
setPassword(value);
setFieldValue('password', value);
};

const handleSubmit = (values, { resetForm }) => {
console.log('Form data', values);
login();
setSuccessMessage('Login successful!');
resetForm();

navigate('/dashboard');
};

const passwordStrengthText = (score) => {
switch (score) {
case 0:
return 'Very Weak';
case 1:
return 'Weak';
case 2:
return 'Moderate';
case 3:
return 'Strong';
case 4:
return 'Very Strong';
default:
return '';
}
};

const formStyle = {
maxWidth: '400px',
margin: 'auto',
padding: '20px',
border: '1px solid #ccc',
borderRadius: '5px',
boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const fieldStyle = {
display: 'block',
marginBottom: '10px',
};

const inputStyle = {
width: '100%',
padding: '8px',
boxSizing: 'border-box',
};

const buttonStyle = {
padding: '10px 20px',
backgroundColor: '#007bff',
color: 'white',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
};

const errorStyle = {
color: 'red',
fontSize: '0.875em',
};

const messageStyle = {
color: 'green',
fontSize: '1em',
marginBottom: '10px',
};

return (
<div style={formStyle}>
<h1>Login</h1>
{successMessage && <div style={messageStyle}>{successMessage}</div>}
<Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={handleSubmit}
>
{({ setFieldValue, values }) => {
const passwordStrength = zxcvbn(values.password).score;
return (
<Form>
<div style={fieldStyle}>
<label htmlFor="username">Username</label>
<Field
type="text"
id="username"
name="username"
placeholder="Enter your username"
style={inputStyle}
/>
<ErrorMessage name="username" component="div" style={errorStyle} />
</div>

<div style={fieldStyle}>
<label htmlFor="password">Password</label>
<div style={{ position: 'relative' }}>

<Field
type={passwordVisible ? 'text' : 'password'}
id="password"
name="password"
placeholder="Enter your password"
style={inputStyle}
onChange={(e) => handlePasswordChange(e, setFieldValue)}
/>
<button
type="button"
onClick={() => setPasswordVisible(!passwordVisible)}
style={{
position: 'absolute',
top: '50%',
right: '10px',
transform: 'translateY(-50%)',
background: 'transparent',
border: 'none',
cursor: 'pointer',
}}
>
{passwordVisible ? 'Hide' : 'Show'}
</button>
</div>
<ErrorMessage name="password" component="div" style={errorStyle} />
<div>
Password Strength: {passwordStrengthText(passwordStrength)}
</div>
</div>

<div style={fieldStyle}>
<label htmlFor="phoneNumber">Phone Number</label>
<Field
type="text"
id="phoneNumber"
name="phoneNumber"
placeholder="Enter your phone number"
style={inputStyle}
/>
<ErrorMessage name="phoneNumber" component="div" style={errorStyle} />
</div>

<div style={fieldStyle}>
<label htmlFor="email">Email</label>
<Field
type="email"
id="email"
name="email"
placeholder="Enter your email"
style={inputStyle}
/>
<ErrorMessage name="email" component="div" style={errorStyle} />
</div>

<div style={fieldStyle}>
<label>
<Field
type="checkbox"
name="rememberMe"
style={{ marginRight: '5px' }}
/>
Remember Me
</label>
</div>

<div>
<button type="submit" style={buttonStyle}>Login</button>
</div>
</Form>
);
}}
</Formik>
</div>
);
};

export default Login;