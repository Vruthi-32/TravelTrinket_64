import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
const [query, setQuery] = useState('');

const handleChange = (event) => {
setQuery(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
onSearch(query);
};

return (
<form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
<input
type="text"
placeholder="Search..."
value={query}
onChange={handleChange}
aria-label="Search"
style={{ padding: '8px', width: '300px' }}
/>
<button type="submit" style={{ padding: '8px', marginLeft: '10px' }}>Search</button>
</form>
);
};

export default SearchBar;