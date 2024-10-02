"use client";

import React, { useEffect, useState } from "react";
import { ColumnDefinition, Table } from "@/src/components/table/Table";
import ActionControls from "@/src/components/table/ActionControls";
import { ButtonConfig } from "@/src/components/button/Button";

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string[];
  publication_year: string;
  cover_image: string;
  status: "Available" | "Checked Out" | "Reserved";
}

interface Filter {
  type: "text" | "date" | "dropdown";
  label: string;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  options?: { value: string; label: string }[];
}

const BooksManagement: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [filterGenre, setFilterGenre] = useState<string | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  // Fetch books data from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const url = `/api/books?search=${search || ""}&page=${currentPage}`;
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [search, filterGenre, currentPage, itemsPerPage]);

  const filterOptions = Array.from(
    new Set(books.flatMap((book) => book.genre))
  ).map((genre) => ({
    value: genre,
    label: genre,
  }));

  const filters: Filter[] = [
    {
      type: "text",
      label: "Search by Title or Author",
      value: search,
      setValue: setSearch,
    },
    {
      type: "dropdown",
      label: "Genre",
      value: filterGenre,
      setValue: setFilterGenre,
      options: filterOptions,
    },
  ];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      !search ||
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = !filterGenre || book.genre.includes(filterGenre);

    return matchesSearch && matchesGenre;
  });

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBooks = filteredBooks.slice(
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
    setSearch(null);
    setFilterGenre(null);
  };

  const handleExportData = () => {
    console.log("Exporting data...", filteredBooks);
  };

  const handleEditRow = (row: Book, index: number) => {
    console.log("Editing row:", row);
  };

  const handleDeleteRow = (index: number) => {
    console.log("Deleting row at index:", index);
    setBooks((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleBulkDelete = () => {
    if (selectedRows.size > 0) {
      console.log("Deleting selected rows:", Array.from(selectedRows));
      setBooks((prevData) =>
        prevData.filter((_, index) => !selectedRows.has(index))
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
    ...getDeleteSelectedButtonConfig(),
  ];

  // Columns configuration
  const columns: ColumnDefinition<Book>[] = [
    { header: "Title", accessor: "title" },
    { header: "Author", accessor: "author" },
    { header: "Publication Year", accessor: "publication_year" },
    {
      header: "Genre",
      accessor: "genre",
      render: (genres: string | string[]) => {
        if (Array.isArray(genres)) {
          return genres.join(", ");
        }
        return genres;
      },
    },
    {
      header: "Cover",
      accessor: "cover_image",
      render: (coverImage: string | string[]) => {
        if (typeof coverImage === "string") {
          return (
            <img
              src={coverImage}
              alt="Book Cover"
              className="w-20 h-28 object-cover"
            />
          );
        }
        // If coverImage is an array, return a fallback or handle it differently
        return null;
      },
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Books Management</h1>

      <ActionControls filters={filters} buttons={buttons} />

      <Table
        columns={columns}
        data={paginatedBooks}
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

export default BooksManagement;
