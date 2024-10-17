'use client'; // Indicates a Client Component

import { useEffect, useState, lazy, Suspense } from 'react';
import { useBlog } from '../../BlogContext';
import Image from 'next/image';

const Comments = lazy(() => import('../Comments')); // Dynamically import the Comments component


export default function PostDetail({ params }) {
  const { posts, setCurrentPost, currentPost, comments, setComments } = useBlog();
  const [comment, setComment] = useState('');

  useEffect(() => {
    const post = posts.find((p) => p.id === parseInt(params.id));
    if (post) {
      setCurrentPost(post);
    }
  }, [params.id, posts, setCurrentPost]);

  if (!currentPost) {
    return <h2 className="text-lg text-gray-700">Loading post details...</h2>; // Show loading state
  }

  const handleAddComment = () => {
    if (comment) {
      setComments((prevComments) => ({
        ...prevComments,
        [currentPost.id]: [...(prevComments[currentPost.id] || []), comment],
      }));
      setComment(''); // Clear input field
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <a className="text-blue-600 hover:underline" href="/">← Back to home</a>
      <h1 className="text-4xl font-bold mb-4 text-indigo-600">{currentPost.title}</h1>
      <Image
        src={`https://picsum.photos/id/${currentPost.id}/800/600`}
        alt={currentPost.title}
        width={800}
        height={600}
        className="rounded-lg mb-4"
      />
      <p className="text-gray-800 mb-6">{currentPost.body}</p>

      <div className="bg-gradient-to-r from-green-100 via-yellow-100 to-orange-100 p-4 rounded-lg mb-6 shadow">
        <h2 className="text-lg font-semibold mb-2 text-green-800">Comments</h2>
        <Suspense fallback={<p>Loading comments...</p>}>
          <Comments 
            comments={comments[currentPost.id]} 
            handleAddComment={handleAddComment} 
            comment={comment}
            setComment={setComment}
          />
        </Suspense>
      </div>
    </div>
  );
}
