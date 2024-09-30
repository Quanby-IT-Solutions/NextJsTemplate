// app/api/books/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { fetchBooks, FetchBooksParams } from './utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const params: FetchBooksParams = {
    limit: searchParams.get('limit') || undefined,
    search: searchParams.get('search') || undefined,
    sort: searchParams.get('sort') || undefined,
    order: searchParams.get('order') || undefined,
  };

  const books = await fetchBooks(params);

  return NextResponse.json(books);
}