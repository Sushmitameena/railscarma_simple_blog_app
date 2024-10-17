# Simple Blog Application

## Overview

This is a simple blog application built with Next.js that fetches and displays a list of blog posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts). The application features a homepage that lists all posts with titles and excerpts, as well as detail pages for each post, including comments functionality.

## Features

- Fetches blog posts from an external API.
- Displays a responsive homepage listing all blog posts.
- Individual post detail pages that display the full content and allow users to add comments.
- Utilizes Tailwind CSS for styling and responsive design.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Installation

To run the application locally, follow these steps:

1. Clone the repository in the terminal:

  
   git clone https://github.com/Sushmitameena/railscarma_simple_blog_app

2. Navigate to the project directory:
   cd simple-blog-app

3.  Install the dependencies:
    npm install
 
4.  Run the development server:
    npm run dev

5.  Open your browser and navigate to http://localhost:3000 to view the application.

Application Flow:
1. Fetching Data-
The application fetches a list of blog posts from the JSONPlaceholder API when the homepage loads. This is done in the homepage component using the fetch function.
2. Displaying Posts-
The homepage displays all posts in a grid format with titles and excerpts. Clicking on a post title navigates to its detail page.
3. State Management-
The application uses the Context API to manage the state of posts, the current post, and comments. The BlogContext provides a way to share state across the application without having to pass props down through multiple layers.
4. Individual Post Details
Each post has a detail page that displays the full content (title and body) and a comments section.
Users can add comments, which are managed in the component state and displayed below the post content.
5. Commenting Feature
Users can add comments to each post using a textarea. The comments are stored in state, and when added, they are displayed in the comments section.




FOLDER STRUCTURE

simple-blog-app/
├── app/
│   ├── BlogContext.js      # Context API for managing state
│   ├── page.js             # Homepage listing all posts
│   └── posts/
│       └── [id]/
│           └── page.js     # Detail page for individual posts
│   ├── Codereview.js       # Code review
├── styles/
│   └── global.css          # Global CSS styles
├── README.md               # Project documentation
└── package.json            # Project dependencies and scripts


Usage
Homepage: When the application loads, it fetches and displays all blog posts from the API.
Post Detail Page: Clicking on a post title takes you to the post detail page, where you can view the full content of the post and add comments.
Adding Comments: In the comments section, type your comment in the provided textarea and click the "Submit Comment" button. The comment will be added and displayed below the input.