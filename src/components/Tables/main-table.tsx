"use client";
import React, { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  Row,
} from "@tanstack/react-table";

interface Column {
  key: string;
  name: string;
  cell?: (props: { row: Row<any> }) => React.ReactNode;
}

interface TableProps {
  data: Record<string, any>[];
  columns: Column[];
  showNumbers?: boolean;
  enablePagination?: boolean;
  showEntries?: boolean;
  className?: string;
  onRowClick?: (row: Record<string, any>) => void;
}

export function Table({
  data,
  columns,
  showNumbers = true,
  enablePagination = true,
  showEntries = true,
  className = "",
  onRowClick,
}: TableProps) {
  const [pageSize, setPageSize] = useState(5);

  const table = useReactTable({
    data,
    columns: [
      ...(showNumbers
        ? [
            {
              accessorKey: "index",
              header: "#",
              cell: (info: any) => info.row.index + 1,
            } as ColumnDef<Record<string, any>, any>,
          ]
        : []),
      ...columns.map((col) => ({
        accessorKey: col.key,
        header: col.name,
        cell: col.cell || ((info: any) => info.row.getValue(col.key)),
      })) as ColumnDef<Record<string, any>, any>[],
    ],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className={`w-full table-auto ${className}`}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-4 font-medium text-black dark:text-white text-left"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr 
                key={row.id}
                onClick={() => onRowClick?.(row.original)}
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-meta-4"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border-t border-stroke px-4 py-5 dark:border-strokedark"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {enablePagination && (
        <div className="flex flex-col items-center justify-between gap-4 p-4 md:flex-row">
          {showEntries && (
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select
                className="rounded border border-stroke bg-transparent px-2 py-1 outline-none dark:border-strokedark"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  table.setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20, 30, 40, 50].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <span>entries</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              className="rounded border border-stroke px-3 py-1 text-sm font-medium hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </button>
            <span className="text-sm">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
            <button
              className="rounded border border-stroke px-3 py-1 text-sm font-medium hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}