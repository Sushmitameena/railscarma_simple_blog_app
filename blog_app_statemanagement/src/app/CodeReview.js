// Task 4: Code Review (10 points)

// Objective: Review a piece of code (provided below) and identify potential issues or improvements.

// ```javascript
// function fetchData() {
//   const posts = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
// }
// ```
// code with suggestions for improvement:
// 1.Asynchronous function declaration:
// The function fetchData does not return a promise, which can make it
//  challenging to handle the results of the fetch operation if called from another asynchronous function.
//  It can be improve by declaring fetchData as an async function and using await for the fetch call.

// 2.Error Handling:
// The current error handling simply logs the error to the console. Depending on the application’s context,
//  it is good to  provide user feedback in case of an error.

// 3.Function Naming:
// The function name fetchData is generic. 
// If this function specifically fetches posts, it could be more descriptive, such as fetchPosts.



// Refactored code
  async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) { // Check if the response status is OK
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error('Fetch error:', err);
        alert('Failed to fetch posts. Please try again later.'); // Example user feedback
    }
}
