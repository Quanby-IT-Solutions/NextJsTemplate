// app/(test)/books/[id]/page.tsx
import { fetchBookById } from "@/app/api/(dummy)/books/utils";

interface BookDetailsPageProps {
  params: {
    id: string;
  };
}

export default async function BookDetailsPage({
  params,
}: BookDetailsPageProps) {
  const book = await fetchBookById(params.id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <div className="flex">
        <img
          src={book.cover_image}
          alt={book.title}
          className="w-40 h-56 object-cover mr-4"
        />
        <div>
          <p className="text-gray-600">{book.author}</p>
          <p className="text-gray-500">{book.publication_year}</p>
          <p className="text-gray-500">Genre: {book.genre.join(", ")}</p>
        </div>
      </div>
      <p className="mt-4">{book.description}</p>
    </div>
  );
}
