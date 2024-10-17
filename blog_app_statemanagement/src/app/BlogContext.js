'use client'; // This line indicates that this file is a Client Component

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Blog Context
const BlogContext = createContext();

// Create a custom hook to use the Blog context
export const useBlog = () => {
  return useContext(BlogContext);
};

// Create a provider component
export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]); // State to store posts
  const [currentPost, setCurrentPost] = useState(null); // State to store the currently selected post
  const [comments, setComments] = useState({}); // State to store comments for each post

  // Effect to fetch posts from an API when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data); // Store fetched posts in state
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); // Run this effect only once when the component mounts

  return (
    <BlogContext.Provider
      value={{ posts, setPosts, currentPost, setCurrentPost, comments, setComments }}
    >
      {children}
    </BlogContext.Provider>
  );
};
