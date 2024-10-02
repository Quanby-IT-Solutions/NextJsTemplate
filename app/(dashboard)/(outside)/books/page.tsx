import { Message } from "@/src/components/form-message/FormMessage";
import { AuthLayout } from "@/src/page-view/auth-pages/auth-layout";
import BooksManagements from "@/src/page-view/auth-pages/books-management";

export default function BooksPage({ searchParams }: { searchParams: Message }) {
  return (
    <AuthLayout>
      <BooksManagements />
    </AuthLayout>
  );
}
