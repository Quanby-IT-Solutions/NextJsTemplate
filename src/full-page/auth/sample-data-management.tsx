"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { ColumnDefinition, Table, Filter } from "@/src/components/table/Table";
import { StatusBadge } from "@/src/components/StatusBadge";
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
const SampleDataManagement: React.FC = () => {
  const [filterType, setFilterType] = useState<string | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [orderData, setOrderData] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        // Simulate an API call with a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setOrderData(orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrderData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filterOptions = useMemo(() => {
    return Array.from(new Set(orderData.map((order) => order.type))).map(
      (type) => ({
        value: type,
        label: type,
      })
    );
  }, [orderData]);

  const filters: Filter[] = useMemo(
    () => [
      {
        type: "dropdown",
        label: "Type",
        value: filterType,
        setValue: setFilterType,
        options: filterOptions,
      },
    ],
    [filterType, filterOptions]
  );

  const handleExportData = useCallback(() => {
    console.log("Exporting data...", orderData);
  }, [orderData]);

  const handleEditRow = useCallback((row: Order, index: number) => {
    console.log("Editing row:", row);
  }, []);

  const handleDeleteRow = useCallback((index: number) => {
    setOrderData((prevData) => prevData.filter((_, i) => i !== index));
  }, []);

  const handleBulkDelete = useCallback(() => {
    if (selectedRows.size > 0) {
      setOrderData((prevData) =>
        prevData.filter((_, index) => !selectedRows.has(index))
      );
      setSelectedRows(new Set());
    }
  }, [selectedRows]);

  const handleItemsPerPageChange = useCallback((items: number) => {
    setCurrentPage(1);
    setItemsPerPage(items);
  }, []);

  const getStatusBadgeProps = useCallback((status: Order["status"]) => {
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
  }, []);

  const columns: ColumnDefinition<Order>[] = useMemo(
    () => [
      { header: "ID", accessor: "id", sortable: true },
      { header: "NAME", accessor: "name", sortable: true },
      { header: "ADDRESS", accessor: "address", sortable: true },
      { header: "DATE", accessor: "date", sortable: true },
      { header: "TYPE", accessor: "type", sortable: true },
      {
        header: "STATUS",
        accessor: "status",
        sortable: true,
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
    ],
    [getStatusBadgeProps]
  );

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

  const buttons: ButtonConfig[] = [
    {
      label: "Export Data",
      onClick: handleExportData,
      variant: "secondary",
      size: "sm",
    },
    ...getDeleteSelectedButtonConfig(),
  ];

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Order Management</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Table<Order>
          columns={columns}
          data={orderData}
          filters={filters}
          buttons={buttons}
          selectable
          editable
          onEditRow={handleEditRow}
          onDeleteRow={handleDeleteRow}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      )}
    </div>
  );
};

export default SampleDataManagement;
