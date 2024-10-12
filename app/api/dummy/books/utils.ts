// app/api/books/utils.ts
export interface FetchBooksParams {
    limit?: string;
    search?: string;
    sort?: string;
    order?: string;
}

export async function fetchBooks({ limit, search, sort, order }: FetchBooksParams) {
    let url = 'https://freetestapi.com/api/v1/books';

    const params = new URLSearchParams();
    if (limit) params.append('limit', limit);
    if (search) params.append('search', search);
    if (sort) params.append('sort', sort);
    if (order) params.append('order', order);

    if (params.toString()) {
        url += `?${params.toString()}`;
    }

    const response = await fetch(url);
    const books = await response.json();

    return books;
}

export async function fetchBookById(id: string) {
    const response = await fetch(`https://freetestapi.com/api/v1/books/${id}`);

    if (!response.ok) {
        throw new Error('Book not found');
    }

    const book = await response.json();
    return book;
}