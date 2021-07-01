import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import AddPost from "./AddPost";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    await axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  };

  const onAdd = async (title, body) => {
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
      })
      .then((response) => {
        setPosts((posts) => [...posts, response.data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, title, body) => {
    await axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        id: id,
        title: title,
        body: body,
      })
      .then((response) => {
        const updatedPosts = posts.map((post) => {
          if (post.id === id) {
            post.title = title;
            post.body = body;
          }

          return post;
        });

        setPosts((post) => updatedPosts);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <AddPost onAdd={onAdd} />
        <h2 className="text-center mb-5">Posts</h2>
        <table className="table mb-4">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Content</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <Post
                id={post.id}
                key={post.id}
                title={post.title}
                body={post.body}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Posts;
