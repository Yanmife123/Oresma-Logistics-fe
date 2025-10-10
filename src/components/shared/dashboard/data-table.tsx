import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface TableColumn {
  key: string;
  label: string;
  align?: "left" | "center" | "right";
}

interface DataTableProps {
  title: string;
  columns: TableColumn[];
  data: Record<string, any>[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  showIcon?: boolean;
}

export function DataTable({
  title,
  columns,
  data,
  showIcon = true,
}: DataTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {showIcon && <TableHead className="w-12"></TableHead>}
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className={
                    column.align === "right"
                      ? "text-right"
                      : column.align === "center"
                      ? "text-center"
                      : ""
                  }
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                {showIcon && (
                  <TableCell>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </TableCell>
                )}
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className={
                      column.align === "right"
                        ? "text-right"
                        : column.align === "center"
                        ? "text-center"
                        : ""
                    }
                  >
                    {row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
