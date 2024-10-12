// app/api/books/[id]/route.ts
import { NextResponse } from 'next/server';
import { fetchBookById } from '../utils';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const bookId = params.id;
    const book = await fetchBookById(bookId);

    if (!book) {
        return NextResponse.json({ error: 'Book not found' }, { status: 404 });
    }
    return NextResponse.json(book);
}
