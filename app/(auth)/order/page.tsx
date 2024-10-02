import { Message } from "@/src/components/form-message/FormMessage";
import { AuthLayout } from "@/src/page-view/auth-pages/auth-layout";
import OrderManagement from "@/src/page-view/auth-pages/order-management";

export default function Order({ searchParams }: { searchParams: Message }) {
  return (
    <AuthLayout>
      <OrderManagement />
    </AuthLayout>
  );
}
