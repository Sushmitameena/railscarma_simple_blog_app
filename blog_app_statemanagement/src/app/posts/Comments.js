'use client';

import React from 'react';

export default function Comments({ comments, handleAddComment, comment, setComment }) {
  return (
    <div>
      <div className="mb-4">
        {comments?.map((c, index) => (
          <p key={index} className="text-gray-700 mb-1">- {c}</p>
        )) || <p>No comments yet.</p>}
      </div>

      {/* Input for adding comments */}
      <div className="mt-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add your comment..."
        />
        <button
          className="mt-2 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200"
          onClick={handleAddComment}
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
}
