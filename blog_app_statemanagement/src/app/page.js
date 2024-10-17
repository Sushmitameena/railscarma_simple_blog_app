'use client';

import { useEffect } from 'react';   //to fetch the data from api
import { useBlog } from './BlogContext';

export default function HomePage() {
  const { posts, setPosts } = useBlog();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, [setPosts]);

  return (
  <div className="container mx-auto p-4 max-w-7xl">
  <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
   Welcome to Blog Posts
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post) => (
      <div
        key={post.id}
        className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 p-4"
      >
        <h2 className="text-2xl font-semibold mb-2 text-purple-800">
          <a className="text-blue-600 hover:underline" href={`/posts/${post.id}`}>
            {post.title}
          </a>
        </h2>
        <p className="text-gray-700 mb-4">{post.body.substring(0, 100)}...</p>
        <a
          className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
          href={`/posts/${post.id}`}
        >
          Read More...
        </a>
      </div>
    ))}
  </div>
</div>

  );
}
