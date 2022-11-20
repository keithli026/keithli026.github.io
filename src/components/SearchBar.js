import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault();
    const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchResults(posts);
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
        </>
    )
}

export default SearchBar