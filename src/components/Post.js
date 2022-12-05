import React, { useContext, useState, useEffect } from 'react'
import HighLighter from './HighLighter'

const Post = ({ mypost, input }) => {
  console.log(input);
  return (
    // input.length > 1 ? 
    // (<div>
    //   <h2><HighLighter text={mypost.title} highlight={input} highlightedItemClass="highlight" /></h2>
    //   <p><HighLighter text={mypost.body} highlight={input} highlightedItemClass="highlight" /></p>
    //   <p>Post ID: {mypost.id}</p>
    // </div>) :
    // (<div>
    //   <h2>{mypost.title}</h2>
    //   <p>{mypost.body}</p>
    //   <p>Post ID: {mypost.id}</p>
    // </div>)
    input.length > 1 ?
      (<div className="members">
        <img src={mypost.photo} alt={mypost.name}></img>
        <h3><HighLighter text={mypost.name} highlight={input} highlightedItemClass="highlight" /></h3>
        <p><HighLighter text={mypost.title} highlight={input} highlightedItemClass="highlight" /></p>
      </div>) :
      (<div className="members">
        <img src={mypost.photo} alt={mypost.name}></img>
        <h3>{mypost.name}</h3>
        <p>{mypost.title}</p>
      </div>)
  )
}

export default Post