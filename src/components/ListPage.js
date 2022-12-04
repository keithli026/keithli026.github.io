import React from 'react';
import Post from "./Post";
import SearchBar from './SearchBar';
const ListPage = ({ searchResults, highlight }) => {
    const results = searchResults.map(post => <Post key={post.id} mypost={post} myhighlight={highlight}/>);
    const content = results.length ? results : <p>No Matching Result</p>;
  return (
    <div>{content}</div>
  );
}

export default ListPage;