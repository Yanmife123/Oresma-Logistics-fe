"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/_lib/utils";
import ListPagination from "../pagination/list-pagination-style1";

export interface Column<T> {
  key: keyof T;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
}

export interface RowAction {
  label: string;
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (row: any) => void;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowActions?: RowAction[];
  onRowClick?: (row: T) => void;
  className?: string;
  striped?: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BaseTable<T extends Record<string, any>>({
  columns,
  data,
  rowActions,
  onRowClick,
  className,
  striped = true,
}: DataTableProps<T>) {
  return (
    <div
      className={cn(
        "w-full overflow-x-auto rounded-lg border border-border",
        className
      )}
    >
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-muted">
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  "px-6 py-3 text-left text-sm font-semibold text-foreground",
                  column.width
                )}
              >
                {column.label}
              </th>
            ))}
            {rowActions && rowActions.length > 0 && (
              <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(
                "border-b border-border transition-colors hover:bg-muted/50",
                striped && rowIndex % 2 === 0 && "bg-background",
                striped && rowIndex % 2 !== 0 && "bg-muted/30",
                onRowClick && "cursor-pointer"
              )}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={cn(
                    "px-6 py-4 text-sm text-foreground",
                    column.width
                  )}
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
              {rowActions && rowActions.length > 0 && (
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {rowActions.map((action, actionIndex) => (
                      <Button
                        key={actionIndex}
                        variant={action.variant || "default"}
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          action.onClick(row);
                        }}
                      >
                        {action.label}
                      </Button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {/* {data.length === 0 && (
        <div className="flex items-center justify-center py-8 text-muted-foreground">
          No data available
        </div>
      )} */}
      <div className="mt-3 p-2">
        <ListPagination
          totalItems={data.length}
          itemsPerPage={10}
          currentPage={1}
        />
      </div>
    </div>
  );
}
