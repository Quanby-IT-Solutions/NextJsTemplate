"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [limit, setLimit] = useState("5");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const url = `/api/books?search=${search}&sort=${sort}&limit=${limit}`;
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [search, sort, limit]);

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Search by title or author
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <label htmlFor="sort" className="sr-only">
          Sort by
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        >
          <option value="">Sort by</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <label htmlFor="limit" className="sr-only">
          Limit
        </label>
        <select
          id="limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id} className="mb-4">
              <Link href={`/books/${book.id}`} className="flex items-center">
                <img
                  src={book.cover_image}
                  alt={book.title}
                  className="w-20 h-28 object-cover mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold">{book.title}</h2>
                  <p className="text-gray-600">{book.author}</p>
                  <p className="text-gray-500">{book.publication_year}</p>
                  <p className="text-gray-500">
                    Genre: {book.genre.join(", ")}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
