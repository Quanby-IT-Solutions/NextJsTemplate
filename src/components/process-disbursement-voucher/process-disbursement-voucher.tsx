import "./process-disbursement-voucher.css";
import React, { useState } from "react";

export interface ProcessDisbursementVoucherProps {
  className?: string;
}

export const ProcessDisbursementVoucher: React.FC<
  ProcessDisbursementVoucherProps
> = ({ className = "" }) => {
  const [supplier, setSupplier] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDate, setPaymentDate] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic
    console.log({ supplier, invoiceNumber, paymentMethod, paymentDate });
  };

  return (
    <div
      className={`max-w-md mx-auto p-6 bg-white rounded-lg shadow-md ${className} ProcessDisbursementVoucher_div1`}
    >
      <h2 className="text-xl font-semibold mb-4 text-center">
        Process Disbursement Voucher
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Supplier:</label>
          <input
            type="text"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            required
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium">Invoice Number:</label>
          <input
            type="text"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            required
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium">Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select payment method
            </option>
            <option value="check">Check</option>
            <option value="bank_transfer">Bank Transfer</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Payment Date:</label>
          <input
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            required
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-600 text-white w-full font-semibold p-2 rounded shadow hover:bg-green-700 transition"
          >
            Submit Payment
          </button>
        </div>
      </form>
    </div>
  );
};