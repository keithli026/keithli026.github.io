import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from 'react'
import HighLighter from './HighLighter'

const Post = ({ mypost, input }) => {
  return (
    input.length > 1 ?
      (<div className="members">
        <Link to={`/about/our-team/physiotherapists/${mypost.pid}`}><img src={mypost.photo} alt={mypost.name}></img></Link>
        <h3><HighLighter text={mypost.name} highlight={input} highlightedItemClass="highlight" /></h3>
        <p><HighLighter text={mypost.title} highlight={input} highlightedItemClass="highlight" /></p>
      </div>) :
      (<div className="members">
         <Link to={`/about/our-team/physiotherapists/${mypost.pid}`}><img src={mypost.photo} alt={mypost.name}></img></Link>
        <h3>{mypost.name}</h3>
        <p>{mypost.title}</p>
      </div>)
  )
}

export default Post