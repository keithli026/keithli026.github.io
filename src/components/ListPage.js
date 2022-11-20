import React from 'react';
import Post from "../pages/Post";

const ListPage = ({ searchResults }) => {
    const results = searchResults.map(post => <Post key={post.id} post={post} />);
    const content = results?.length ? results : <p>No Matching Result</p>;
  return (
    <div>{content}</div>
  )
}

export default ListPage