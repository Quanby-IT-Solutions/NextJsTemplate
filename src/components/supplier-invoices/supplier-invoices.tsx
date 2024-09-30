import "./supplier-invoices.css";
import React, { useState, useEffect, useRef } from "react";
import { ProcessDisbursementVoucher } from "../process-disbursement-voucher/process-disbursement-voucher";

// Supplier Invoice Data Structure
export interface SupplierInvoice {
  invoiceNumber: string;
  supplier: string;
  poNumber: string;
  amount: number;
  paymentStatus: string;
}

// Props for SupplierInvoices component
export interface SupplierInvoicesProps {
  invoices: SupplierInvoice[];
  onView: (invoice: SupplierInvoice) => void;
  onProcessPayment: (invoice: SupplierInvoice) => void;
  onCancelPayment: (invoice: SupplierInvoice) => void;
  className?: string;
}

// Dummy data
const dummyInvoices: SupplierInvoice[] = [
  {
    invoiceNumber: "INV001",
    supplier: "ABC Supplies",
    poNumber: "PO12345",
    amount: 1500.75,
    paymentStatus: "Unpaid",
  },
  {
    invoiceNumber: "INV002",
    supplier: "XYZ Industries",
    poNumber: "PO67890",
    amount: 2750.0,
    paymentStatus: "Paid",
  },
];

// Main Table Component
const SupplierInvoices: React.FC<SupplierInvoicesProps> = ({
  invoices = dummyInvoices, // Use dummy data as default
  onView,
  onProcessPayment,
  onCancelPayment,
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`${className} supplier-invoices`}>
      <div className="SupplierInvoices_div3 p-4">
        <p className="SupplierInvoices_p1 text-xl font-semibold">
          Supplier Invoices
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          onClick={handleOpenModal} // Open the modal when clicked
        >
          Disbursement Voucher
        </button>
      </div>

      <table className="table-auto">
        <thead className="SupplierInvoices_thead1">
          <tr>
            <th>Invoice Number</th>
            <th>Supplier</th>
            <th>PO Number</th>
            <th>Amount</th>
            <th>Payment Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="SupplierInvoices_tbody1">
          {invoices.length > 0 ? (
            invoices.map((invoice) => (
              <tr key={invoice.invoiceNumber}>
                <td>{invoice.invoiceNumber}</td>
                <td>{invoice.supplier}</td>
                <td>{invoice.poNumber}</td>
                <td>${invoice.amount.toFixed(2)}</td>
                <td>
                  <span
                    className={`${
                      invoice.paymentStatus === "Paid"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {invoice.paymentStatus}
                  </span>
                </td>
                <td>
                  <DropdownActions
                    invoice={invoice}
                    onView={onView}
                    onProcessPayment={onProcessPayment}
                    onCancelPayment={onCancelPayment}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                No invoices found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="flex fixed inset-0 bg-gray-800 bg-opacity-50 items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg SupplierInvoices_div4">
            <ProcessDisbursementVoucher className="w-full max-w-md" />
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Dropdown component for actions
const DropdownActions: React.FC<{
  invoice: SupplierInvoice;
  onView: (invoice: SupplierInvoice) => void;
  onProcessPayment: (invoice: SupplierInvoice) => void;
  onCancelPayment: (invoice: SupplierInvoice) => void;
}> = ({ invoice, onView, onProcessPayment, onCancelPayment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Close dropdown on outside click
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative SupplierInvoices_div1" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-gray-200 px-4 py-2 rounded"
      >
        Actions
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg SupplierInvoices_div2">
          <button
            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
            onClick={() => {
              onView(invoice);
              setIsOpen(false);
            }}
          >
            View
          </button>
          <button
            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
            onClick={() => {
              onProcessPayment(invoice);
              setIsOpen(false);
            }}
          >
            Process Payment
          </button>
          <button
            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
            onClick={() => {
              onCancelPayment(invoice);
              setIsOpen(false);
            }}
          >
            Cancel Payment
          </button>
        </div>
      )}
    </div>
  );
};

// Dummy handlers for actions
const handleViewInvoice = (invoice: SupplierInvoice) => {
  alert(`Viewing invoice: ${invoice.invoiceNumber}`);
};

const handleProcessPayment = (invoice: SupplierInvoice) => {
  alert(`Processing payment for invoice: ${invoice.invoiceNumber}`);
};

const handleCancelPayment = (invoice: SupplierInvoice) => {
  alert(`Canceling payment for invoice: ${invoice.invoiceNumber}`);
};

export default function App() {
  return (
    <SupplierInvoices
      invoices={dummyInvoices}
      onView={handleViewInvoice}
      onProcessPayment={handleProcessPayment}
      onCancelPayment={handleCancelPayment}
    />
  );
}
