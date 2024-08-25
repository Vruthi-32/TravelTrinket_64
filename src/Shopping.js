import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
{ id: 1, name: 'Mini Bluetooth Keyboard', description: 'A compact, portable typing solution that connects wirelessly via Bluetooth. Ideal for tablets or smartphones during travel.', price: 29.99 },
{ id: 2, name: 'Rolling Square Keychain Charger Cable', description: 'A compact keychain with a hidden charging cable for your devices.', price: 19.99 },
{ id: 3, name: 'Glam Tech Mirror', description: 'A compact travel makeup mirror with built-in LED lights.', price: 24.99 },
{ id: 4, name: 'Enviromux-Mini', description: 'A compact environmental monitoring device that tracks air quality and pollution.', price: 39.99 },
{ id: 5, name: 'Pocket-Sized Projector', description: 'Turn any surface into a screen for movie nights or presentations.', price: 99.99 },
{ id: 6, name: 'Portable and Magnetic Chess Board', description: 'Compact, magnetic, foldable, and delightful ♟️.', price: 22.99 },
{ id: 7, name: 'Apollo Neuro', description: 'A variable device that helps reduce stress and improve sleep during travel', price: 249.99 },
{ id: 8, name: 'Universal travel adapter', description: 'Ensure compatibility with power outlets worldwide', price: 14.99 },
{ id: 9, name: 'Victorinox pocket tool', description: 'A versatile tool with various functions including opening bottles and tightening screws', price: 34.99 },
{ id: 10, name: 'Tile mate', description: 'Attach this small Bluetooth tracker to your keys, wallet or luggage. Use the app to find them easily, even if they’re buried in your bag.', price: 24.99 },
{ id: 11, name: 'A cute and portable selfie stick', description: 'This selfie stick is a portable, extendable rod for capturing group photos or selfies', price: 15.99 },
];

const Shopping = () => {
const [cart, setCart] = useState([]);
const [notification, setNotification] = useState('');
const addToCart = (product) => {
setCart((prevCart) => [...prevCart, product]);
setNotification(`${product.name} has been added to your cart!`);

setTimeout(() => {
setNotification('');
}, 4000);
};

return (
<div>
<main>
<h1>Welcome to the Shopping World</h1>
<p>Find unique travel-inspired products for your next adventure.</p>
<section id="productList">
<div className="product-grid">
{products.map((product) => (
<div key={product.id} className="product-card">
<p><strong>{product.name}</strong></p>
<p>{product.description}</p>
<p><strong>${product.price.toFixed(2)}</strong></p>
<button onClick={() => addToCart(product)}>Add to Cart</button>
</div>
))}
</div>
</section>
{notification && (
<div className="notification" style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}>
{notification}
</div>
)}
<section id="cart">
<h2>Shopping Cart</h2>
{cart.length === 0 ? (
<p>Your cart is empty.</p>
) : (
<ul>
{cart.map((item, index) => (
<li key={index}>
{item.name} - ${item.price.toFixed(2)}
</li>
))}
</ul>
)}
</section>
</main>
</div>
);
};

export default Shopping;