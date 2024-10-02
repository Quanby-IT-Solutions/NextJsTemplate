"use client";

import React, { useEffect, useState, useMemo } from "react";
import { ColumnDefinition, Table, Filter } from "@/src/components/table/Table";
import { ButtonConfig } from "@/src/components/button/Button";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string[];
  publication_year: number;
  description: string;
  cover_image: string;
}

const BooksManagement: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filterGenre, setFilterGenre] = useState<string | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/books");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data);

        // Extract unique genres
        const uniqueGenres = Array.from(
          new Set(data.flatMap((book: Book) => book.genre))
        );
        setGenres(uniqueGenres as string[]);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
        setGenres([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const columns: ColumnDefinition<Book>[] = [
    { header: "Title", accessor: "title", sortable: true },
    { header: "Author", accessor: "author", sortable: true },
    {
      header: "Publication Year",
      accessor: "publication_year",
      sortable: true,
    },
    {
      header: "Genre",
      accessor: "genre",
      sortable: true,
      render: (data: string | number | string[]) => {
        if (Array.isArray(data)) {
          return data.join(", ");
        } else if (typeof data === "string" || typeof data === "number") {
          return String(data);
        }
        return "";
      },
    },
  ];

  const filterOptions = useMemo(() => {
    return genres.map((genre) => ({
      value: genre,
      label: genre,
    }));
  }, [genres]);

  const filters: Filter[] = useMemo(
    () => [
      {
        type: "dropdown",
        label: "Genre",
        value: filterGenre,
        setValue: setFilterGenre,
        options: filterOptions,
      },
    ],
    [filterGenre, filterOptions]
  );

  useEffect(() => {
    console.log("Current books:", books);
    console.log("Current filter genre:", filterGenre);
  }, [books, filterGenre]);

  const handleExportData = () => {
    console.log("Exporting data...", books);
    // Implement export functionality here
  };

  const handleEditRow = (row: Book, index: number) => {
    console.log("Editing row:", row);
    // Implement edit functionality here
  };

  const handleDeleteRow = (index: number) => {
    console.log("Deleting row at index:", index);
    setBooks((prevBooks) => prevBooks.filter((_, i) => i !== index));
  };

  const handleBulkDelete = () => {
    if (selectedRows.size > 0) {
      console.log("Deleting selected rows:", Array.from(selectedRows));
      setBooks((prevBooks) =>
        prevBooks.filter((_, index) => !selectedRows.has(index))
      );
      setSelectedRows(new Set());
    }
  };

  const handleItemsPerPageChange = (items: number) => {
    setCurrentPage(1);
    setItemsPerPage(items);
  };

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
      <h1 className="text-2xl font-bold">Books Management</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Table<Book>
            columns={columns}
            data={books}
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
        </>
      )}
    </div>
  );
};

export default BooksManagement;
