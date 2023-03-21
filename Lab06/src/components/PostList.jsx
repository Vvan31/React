// import React from "react";

// const PostList = ({ posts }) => {
//   return posts.map((post, index) => (
//     <React.Fragment key={index}>
//       {post.image && (
//         <img
//           src={URL.createObjectURL(post.image)}
//           alt="post-cover"
//           style={{ height: 100, width: 200, objectFit: "cover" }}
//         />
//       )}
//       <p>{post.content}</p>
//       <div>{post.user}</div>
//     </React.Fragment>
//   ));
// };

// export default PostList;

/**
 * =================================================================================
 */

import React from "react";

import Post from "./Post";

import { ImageList } from '@mui/material/';


const PostList = ({ posts }) => {
  /* return posts.map((post, index) => (
    // <Post post={post} key={index} />
    <Post key={index} {...post} />
  )); */
  return (
    <>
      <ImageList sx={{ width: '100%', height: '55%', overflowY:'scroll'}}>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </ImageList>
    </>
  )
};

export default PostList;

/**
 * =================================================================================
 */


/**
 * =================================================================================
 */

