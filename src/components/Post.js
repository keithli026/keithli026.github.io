import React, { useContext, useState, useEffect } from 'react'
import HighLighter from './HighLighter'

const Post = ({ mypost, myhighlight }) => {
  // console.log(myhighlight);
  return (
    <div>
      <h2><HighLighter text={mypost.title} highlight={myhighlight} highlightedItemClass="highlight" /></h2>
      <p><HighLighter text={mypost.body} highlight={myhighlight} highlightedItemClass="highlight" /></p>
      <p>Post ID: {mypost.id}</p>
    </div>
  )
}

export default Post