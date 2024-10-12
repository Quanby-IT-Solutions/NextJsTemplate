# Guide

1. `/api/books`:
   - This route is used to fetch all books or search/sort books based on query parameters.
   - HTTP Method: GET
   - Query Parameters:
     - `limit` (optional): Limits the number of books returned. Example: `/api/books?limit=5`
     - `search` (optional): Searches for books by title or author. Example: `/api/books?search=query`
     - `sort` (optional): Sorts the books by a specific field. Example: `/api/books?sort=title`
     - `order` (optional): Specifies the sorting order (`asc` for ascending, `desc` for descending). Example: `/api/books?sort=title&order=desc`
   - Response: Returns an array of book objects matching the specified criteria.

2. `/api/books/[id]`:
   - This route is used to fetch a single book by its ID.
   - HTTP Method: GET
   - Path Parameter:
     - `id`: The ID of the book to fetch. Example: `/api/books/1`
   - Response: Returns the book object with the specified ID.
   - Error Handling: If the book with the specified ID is not found, it returns a JSON response with an error message and a 404 status code.

Example usage:

- Fetch all books: `/api/books`
- Fetch five books: `/api/books?limit=5`
- Search for books with the title or author containing "JavaScript": `/api/books?search=JavaScript`
- Sort books by title in descending order: `/api/books?sort=title&order=desc`
- Fetch a single book with ID 1: `/api/books/1`

Dummy Data for book is referenced [here](https://freetestapi.com/apis/books).
