import './globals.css';
import { BlogProvider } from './BlogContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Simple Blog App</title>
      </head>
      <body>
        <BlogProvider>
          {children}
        </BlogProvider>
      </body>
    </html>
  );
}
