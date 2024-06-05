// Search.js
import React, { useState, useContext } from 'react';
import { SearchContext } from './SearchContext';

export default function Search() {
    const [text, setText] = useState('');
    const { setSearchValue } = useContext(SearchContext);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchValue(text);
    };

    return (
        <div>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Keyword"
                    onChange={handleChange}
                    value={text}
                    aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    );
}
