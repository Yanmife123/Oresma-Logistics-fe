"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/_lib/utils";
import ListPagination from "../pagination/list-pagination-style1";

import { Card } from "@/components/ui/card";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNestedValue(obj: any, path: string) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

export interface Column<T> {
  key: keyof T | string;
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
  rowActions2?: (row: T, rowIndex: number) => React.ReactNode;
  onRowClick?: (row: T) => void;
  className?: string;
  striped?: boolean;
  count?: number;
  itemsPerPage?: number;
  showCountBadge?: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BaseTable<T extends Record<string, any>>({
  columns,
  data,
  rowActions,
  rowActions2,
  onRowClick,
  className,
  count,
  itemsPerPage = 10,
  striped = true,
  showCountBadge = false,
}: DataTableProps<T>) {
  const hasActions = (rowActions && rowActions.length > 0) || rowActions2;
  const totalRecords = count || data.length;
  return (
    <Card
      className={cn(
        "md:max-w-[90vw] rounded-lg border-border gap-3",
        className
      )}
    >
      {showCountBadge && (
        <div className="mb-1 flex items-center gap-3 px-4 pt-4">
          <div className="flex px-4 py-2 items-center justify-center rounded-full border-2 border-border bg-muted text-sm font-semibold text-foreground">
            {data.length} of {totalRecords} Records
          </div>
        </div>
      )}
      <div className="md:hidden">
        <div className="space-y-3 p-4">
          {data.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={cn(
                "rounded-lg border border-border p-4 transition-colors hover:bg-muted/50",
                onRowClick && "cursor-pointer"
              )}
              onClick={() => onRowClick?.(row)}
            >
              {/* Card content */}
              <div className="space-y-2">
                {columns.map((column) => (
                  <div
                    key={String(column.key)}
                    className="flex justify-between gap-2"
                  >
                    <span className="text-xs font-semibold text-muted-foreground">
                      {column.label}
                    </span>
                    <span className="text-sm text-foreground">
                      {column.render
                        ? column.render(row[column.key], row)
                        : String(getNestedValue(row, String(column.key)))}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card actions */}
              {hasActions && (
                <div className="mt-3 border-t border-border pt-3">
                  {rowActions2 ? (
                    rowActions2(row, rowIndex)
                  ) : (
                    <div className="flex gap-2">
                      {rowActions?.map((action, actionIndex) => (
                        <Button
                          key={actionIndex}
                          variant={action.variant || "default"}
                          size="sm"
                          className="flex-1 text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            action.onClick(row);
                          }}
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden overflow-x-auto md:block ">
        <table className="w-full min-w-max">
          <thead>
            <tr className="border-b border-border bg-muted">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={cn(
                    "px-2 py-2 text-left text-xs font-semibold text-foreground sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-3",
                    column.width
                  )}
                >
                  {column.label}
                </th>
              ))}
              {hasActions && (
                <th className="sticky right-0 z-10 bg-muted px-2 py-2 text-left text-xs font-semibold text-foreground sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-3">
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
                      "px-2 py-2 text-xs text-foreground sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-4",
                      column.width
                    )}
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : getNestedValue(row, String(column.key))}
                  </td>
                ))}
                {hasActions && (
                  <td className="sticky right-0 z-10 bg-inherit px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4">
                    {rowActions2 ? (
                      rowActions2(row, rowIndex)
                    ) : (
                      <div className="flex gap-1 sm:gap-2">
                        {rowActions?.map((action, actionIndex) => (
                          <Button
                            key={actionIndex}
                            variant={action.variant || "default"}
                            size="sm"
                            className="text-xs sm:text-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              action.onClick(row);
                            }}
                          >
                            {action.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 p-2">
        <ListPagination
          totalItems={count || data.length}
          itemsPerPage={itemsPerPage}
          currentPage={1}
        />
      </div>
    </Card>
  );
}
