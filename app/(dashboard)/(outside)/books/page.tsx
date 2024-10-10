import { Message } from "@/src/components/form-message/FormMessage";
import { AuthLayout } from "@/src/full-page/auth/auth-layout";
import BooksManagements from "@/src/full-page/auth/books-management";

export default function BooksPage({ searchParams }: { searchParams: Message }) {
  return (
    <AuthLayout>
      <BooksManagements />
    </AuthLayout>
  );
}
