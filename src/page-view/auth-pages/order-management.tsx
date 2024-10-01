"use client";

import { ColumnDefinition, Table } from "@/src/components/table/Table";
import { StatusBadge } from "@/src/components/StatusBadge";
import React, { useState } from "react";
import ActionControls from "@/src/components/table/ActionControls";
import { CheckCircle, Hourglass, XCircle } from "lucide-react";
import { ButtonConfig } from "@/src/components/button/Button";

interface Order {
  id: string;
  name: string;
  address: string;
  date: string;
  type: string;
  status: "Completed" | "Processing" | "Rejected";
}

const orders: Order[] = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "14 Feb 2019",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "14 Feb 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Johnny Depp",
    address: "542 Nicole Vista",
    date: "15 Feb 2019",
    type: "Furniture",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Alice Smith",
    address: "1202 Warner Street",
    date: "15 Feb 2019",
    type: "Electronics",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Ethan Johnson",
    address: "223 Baker Avenue",
    date: "16 Feb 2019",
    type: "Groceries",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Sarah Wilson",
    address: "787 Sunset Blvd",
    date: "16 Feb 2019",
    type: "Clothing",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Michael Brown",
    address: "456 Pine Street Apt. 12",
    date: "17 Feb 2019",
    type: "Electric",
    status: "Rejected",
  },
  {
    id: "00008",
    name: "Emily Davis",
    address: "908 Greenfield Lane",
    date: "18 Feb 2019",
    type: "Book",
    status: "Completed",
  },
  {
    id: "00009",
    name: "David Taylor",
    address: "34 Hilltop Road",
    date: "18 Feb 2019",
    type: "Furniture",
    status: "Processing",
  },
  {
    id: "00010",
    name: "Olivia Anderson",
    address: "871 Mountain Pass",
    date: "19 Feb 2019",
    type: "Clothing",
    status: "Rejected",
  },
  {
    id: "00011",
    name: "James Martinez",
    address: "523 Maple Court",
    date: "19 Feb 2019",
    type: "Groceries",
    status: "Completed",
  },
  {
    id: "00012",
    name: "Sophia Garcia",
    address: "198 Oakwood Drive",
    date: "20 Feb 2019",
    type: "Electronics",
    status: "Processing",
  },
  {
    id: "00013",
    name: "Daniel Harris",
    address: "409 Riverbend Street",
    date: "21 Feb 2019",
    type: "Book",
    status: "Completed",
  },
  {
    id: "00014",
    name: "Ava Lewis",
    address: "344 Grand Avenue",
    date: "22 Feb 2019",
    type: "Furniture",
    status: "Rejected",
  },
  {
    id: "00015",
    name: "William Robinson",
    address: "155 Elm Street",
    date: "22 Feb 2019",
    type: "Clothing",
    status: "Processing",
  },
];

interface Filter {
  type: "text" | "date" | "dropdown";
  label: string;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  options?: { value: string; label: string }[];
}

const OrderManagement: React.FC = () => {
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterDate, setFilterDate] = useState<string | null>(null);
  const [filterName, setFilterName] = useState<string | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [orderData, setOrderData] = useState<Order[]>(orders);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  const filterOptions = Array.from(
    new Set(orders.map((order) => order.type))
  ).map((type) => ({
    value: type,
    label: type,
  }));

  const filters: Filter[] = [
    {
      type: "date",
      label: "Filter by Date",
      value: filterDate,
      setValue: setFilterDate,
    },
    {
      type: "dropdown",
      label: "Order Type",
      value: filterType,
      setValue: setFilterType,
      options: filterOptions,
    },
    {
      type: "text",
      label: "Customer Name",
      value: filterName,
      setValue: setFilterName,
    },
  ];

  const filteredOrders = orderData.filter((order) => {
    return (
      (!filterType || order.type === filterType) &&
      (!filterDate || order.date === filterDate) &&
      (!filterName ||
        order.name.toLowerCase().includes(filterName.toLowerCase()))
    );
  });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNextPage = () => handlePageChange(currentPage + 1);
  const handlePreviousPage = () => handlePageChange(currentPage - 1);
  const handleFirstPage = () => handlePageChange(1);
  const handleLastPage = () => handlePageChange(totalPages);

  const handleResetFilter = () => {
    setFilterType(null);
    setFilterDate(null);
    setFilterName(null);
  };

  const handleExportData = () => {
    console.log("Exporting data...", filteredOrders);
  };

  const handleEditRow = (row: Order, index: number) => {
    console.log("Editing row:", row);
  };

  const handleDeleteRow = (index: number) => {
    console.log("Deleting row at index:", index);
    setOrderData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleBulkDelete = () => {
    if (selectedRows.size > 0) {
      console.log("Deleting selected rows:", Array.from(selectedRows));
      setOrderData((prevData) =>
        prevData.filter((_, index) => !selectedRows.has(index))
      );
      setSelectedRows(new Set());
    }
  };

  const handleItemsPerPageChange = (items: number) => {
    setCurrentPage(1);
    setItemsPerPage(items);
  };

  const handlePrimaryAction = () => {
    console.log("Primary action triggered...");
  };

  const getStatusBadgeProps = (status: Order["status"]) => {
    switch (status) {
      case "Completed":
        return {
          className: "bg-teal-100 text-teal-800 border-teal-500",
          icon: <CheckCircle className="text-teal-500" size={20} />,
        };
      case "Processing":
        return {
          className: "bg-violet-100 text-violet-800 border-violet-700",
          icon: <Hourglass className="text-violet-700" size={20} />,
        };
      case "Rejected":
        return {
          className: "bg-red-100 text-red-800 border-red-600",
          icon: <XCircle className="text-red-600" size={20} />,
        };
      default:
        return {
          className: "",
          icon: null,
        };
    }
  };

  const columns: ColumnDefinition<Order>[] = [
    { header: "ID", accessor: "id" },
    { header: "NAME", accessor: "name" },
    { header: "ADDRESS", accessor: "address" },
    { header: "DATE", accessor: "date" },
    { header: "TYPE", accessor: "type" },
    {
      header: "STATUS",
      accessor: "status",
      render: (status) => {
        const { className, icon } = getStatusBadgeProps(
          status as Order["status"]
        );
        return (
          <StatusBadge
            status={status as Order["status"]}
            className={className}
            icon={icon}
          />
        );
      },
    },
  ];

  const getDeleteSelectedButtonConfig = (): ButtonConfig[] => {
    if (selectedRows.size > 0) {
      return [
        {
          label: `Delete Selected (${selectedRows.size})`,
          onClick: handleBulkDelete,
          variant: "destructive",
          size: "sm",
        },
      ];
    }
    return [];
  };

  // Buttons configuration
  const buttons: ButtonConfig[] = [
    {
      label: "Reset Filter",
      onClick: handleResetFilter,
      variant: "destructive",
      size: "sm",
    },
    {
      label: "Export Data",
      onClick: handleExportData,
      variant: "secondary",
      size: "sm",
    },
    {
      label: "Add New Item",
      onClick: handlePrimaryAction,
      variant: "default",
      size: "sm",
    },
    ...getDeleteSelectedButtonConfig(),
  ];

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Order Management</h1>

      <ActionControls filters={filters} buttons={buttons} />

      <Table
        columns={columns}
        data={paginatedOrders}
        selectable
        editable
        onEditRow={handleEditRow}
        onDeleteRow={handleDeleteRow}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        onFirstPage={handleFirstPage}
        onLastPage={handleLastPage}
        onPageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
};

export default OrderManagement;
