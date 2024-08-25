import React, { useState, useRef } from 'react';

const ContactUs = () => {
  const [fullName, setFullName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [desiredDepartment, setDesiredDepartment] = useState('');
  const [previousCompanies, setPreviousCompanies] = useState('');
  const [resume, setResume] = useState(null);
  const [resumeName, setResumeName] = useState('');
  const [message, setMessage] = useState('');

  // Reference to the file input
  const fileInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!fullName) {
      setMessage('Full Name is required.');
      return;
    }
    if (!emailId) {
      setMessage('Email ID is required.');
      return;
    }
    if (!phoneNumber) {
      setMessage('Phone Number is required.');
      return;
    }
    if (!gender) {
      setMessage('Gender is required.');
      return;
    }
    if (!yearsOfExperience) {
      setMessage('Years of Work Experience is required.');
      return;
    }
    if (!desiredDepartment) {
      setMessage('Desired Department is required.');
      return;
    }
    if (!previousCompanies) {
      setMessage('Previously Worked Companies is required.');
      return;
    }

    if (resume) {
      if (resume.size > 5 * 1024 * 1024) { // 5 MB limit
        setMessage('Resume size exceeds 5 MB limit.');
        return;
      }
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(resume.type)) {
        setMessage('Only PDF and Word files are accepted for the resume.');
        return;
      }
    }
    
    setMessage('Your response has been received. Thank you!');
    
    // Clear all input fields
    setFullName('');
    setEmailId('');
    setPhoneNumber('');
    setGender('');
    setYearsOfExperience('');
    setDesiredDepartment('');
    setPreviousCompanies('');
    setResume(null);
    setResumeName('');
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
    if (file) {
      setResumeName(file.name);
    } else {
      setResumeName('');
    }
  };

  return (
    <div>
      <h2>Join Our Team</h2>
      <p>Fill out the form to apply for a position in our company. We will review your details and reach out to you shortly.</p>
      
      <form id="new_employee_form" name="new_employee_form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>User Details</legend>
          
          <label htmlFor="full_name">Full Name:</label>
          <input
            type="text"
            name="full_name"
            id="full_name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            autoFocus
            placeholder="Enter your full name"
            aria-required="true"
            aria-label="Full Name"
          />
          <br />
          
          <label htmlFor="email_id">Email ID:</label>
          <input
            type="email"
            name="email_id"
            id="email_id"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            required
            placeholder="Enter your email address"
            aria-required="true"
            aria-label="Email ID"
          />
          <br />
          
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            required
            placeholder="Enter your phone number"
            aria-required="true"
            aria-label="Phone Number"
          />
          <br />
          
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            aria-required="true"
            aria-label="Gender"
          >
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <br />
          
          <label htmlFor="years_of_experience">Years of Work Experience:</label>
          <input
            type="number"
            id="years_of_experience"
            name="years_of_experience"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
            required
            placeholder="Enter years of experience"
            aria-required="true"
            aria-label="Years of Work Experience"
          />
          <br />
          
          <label htmlFor="desired_department">Desired Department:</label>
          <select
            name="desired_department"
            id="desired_department"
            value={desiredDepartment}
            onChange={(e) => setDesiredDepartment(e.target.value)}
            required
            aria-required="true"
            aria-label="Desired Department"
          >
            <option value="">Select Department</option>
            <option value="Marketing">Marketing</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Communication">Communication</option>
            <option value="HR">HR</option>
          </select>
          <br />
          
          <label htmlFor="previous_companies">Previously Worked Companies:</label>
          <textarea
            id="previous_companies"
            name="previous_companies"
            rows="4"
            cols="40"
            placeholder="List the companies you have previously worked for..."
            value={previousCompanies}
            onChange={(e) => setPreviousCompanies(e.target.value)}
            required
            aria-required="true"
            aria-label="Previously Worked Companies"
          />
          <br />

          <label htmlFor="resume">Upload Resume (optional):</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            ref={fileInputRef}
            aria-label="Upload Resume"
          />
          <br />
          {resumeName && <p>Selected file: {resumeName}</p>}
          
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
      <div id="confirmationDiv">
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ContactUs;