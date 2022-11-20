import React from 'react'

const Post = ({ post }) => {
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>Post ID: {post.id}</p>
    </div>
  )
}

export default Post