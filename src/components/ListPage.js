import React from 'react';
import Post from "./Post";
const ListPage = ({ searchResults, input }) => {
  const results = searchResults.map(post => <Post key={post.pid} mypost={post} input={input}/>);
  const content = results.length ? results : <p>No Matching Result</p>;
  return (
    <div className="physiotherapists_list">
      <div className="members_wrapper">
        {content}
      </div>
    </div>
  );
}

export default ListPage;