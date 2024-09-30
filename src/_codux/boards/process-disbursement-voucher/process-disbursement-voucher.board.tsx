import React from "react";
import { createBoard } from "@wixc3/react-board";
import { ProcessDisbursementVoucher } from "../../../components/process-disbursement-voucher/process-disbursement-voucher";

export default createBoard({
  name: "ProcessDisbursementVoucher",
  Board: () => <ProcessDisbursementVoucher />,
  isSnippet: true,
});