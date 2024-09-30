import React from "react";
import { createBoard } from "@wixc3/react-board";
import SupplierInvoices, {
  SupplierInvoice,
} from "../../../components/supplier-invoices/supplier-invoices";

export default createBoard({
  name: "SupplierInvoices",
  Board: () => <SupplierInvoices />,
  isSnippet: true,
  environmentProps: {
    windowWidth: 1024,
  },
});
