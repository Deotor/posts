import { FETCH_POSTS, NEW_POST, GET_POST, NEW_COM, DEL_POST } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://simple-blog-api.crew.red/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
  fetch("https://simple-blog-api.crew.red/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const getPost = id => dispatch => {
  fetch("https://simple-blog-api.crew.red/posts/" + id + "?_embed=comments")
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: GET_POST,
        payload: post
      })
    );
};

export const createCom = postData => dispatch => {
  fetch("https://simple-blog-api.crew.red/comments", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(com =>
      dispatch({
        type: NEW_COM,
        payload: com
      })
    );
};

export const delPost = id => dispatch => {
  console.log("https://simple-blog-api.crew.red/posts/" + id);
  fetch("https://simple-blog-api.crew.red/posts/" + id, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(delRes =>
      dispatch({
        type: DEL_POST,
        payload: delRes
      })
    );
};
