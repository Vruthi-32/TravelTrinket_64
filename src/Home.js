import React, { useState } from 'react';
import SearchBar from './SearchBar';

const Home = () => {
const [searchResults, setSearchResults] = useState([]);
const [query, setQuery] = useState('');

const allItems = [
'Travel packages',
'Flight tickets booking',
'Foreign tour packages',
'Guided tours',
'Travel insurance',
'Visa assistance',
'24/7 customer support',
];

const handleSearch = (query) => {
const results = allItems.filter(item =>
item.toLowerCase().includes(query.trim().toLowerCase())
);
setSearchResults(results);
setQuery(query);
};

return (
<div>
{/* Company Information */}
<h2>Welcome!</h2>
<p>Our headquarters is at Darjling!</p>
<p>Our Vision is to inspire and enable everyone to explore the world with ease and joy!</p>
<p>Our mission is To provide exceptional travel experiences through personalized services, innovative solutions, and a commitment to customer satisfaction.</p>
<p>Travel and trinkets, where memories sparkle.</p>
<p>At TravelTrinkets, we believe that every journey deserves a keepsake.</p>
<p>Curated travel-inspired trinkets for your journey.</p>
<p>Unlock adventure with our exquisite trinkets.</p>
<p>Our tagline is, "Collect moments, not just keepsakes."</p>

{/* Search Bar */}

<h3>Search Our Services</h3>
<SearchBar onSearch={handleSearch} />
{/* Search Results */}
<div>
<h4>Search Results:</h4>
{searchResults.length > 0 ? (
<ul>
{searchResults.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
) : (
query ? <p>No results found for "{query}".</p> : <p>Start typing to search for our services...</p>
)}
</div>

{/* Services List */}
<div>
<h4>Available Services:</h4>
<ul>
{allItems.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
</div>
</div>
);
};

export default Home;