import React, { useState, useEffect, createContext, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./searchBar.scss";
import ListPage from './ListPage';

const SearchBar = ({ posts, setSearchResults, searchResults }) => {
    const handleSubmit = (e) => e.preventDefault();
    const [input, setInput] = useState("");
    // console.log(input);
    const handleSearchChange = (e) => {
        setInput(e.target.value);
        if (!e.target.value) return setSearchResults(posts);
        const resultArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value));
        setSearchResults(resultArray);
    }

    return (
        <>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search_input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className="search_button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            <ListPage searchResults={searchResults} highlight={input}></ListPage>
        </>
    );
}

export default SearchBar;