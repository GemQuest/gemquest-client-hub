"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { renderCellValue } from "@/utils/dataFormattingUtils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pencil,
  Trash2,
  Filter,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

type SortDirection = "asc" | "desc" | null;

interface SortState {
  column: string;
  direction: SortDirection;
}

interface DataTableProps {
  title: string;
  data: Array<Record<string, unknown>>; // Accepts dynamic data as an array of objects
  filters?: { [key: string]: string[] };
  searchPlaceholder?: string;
  onEdit?: (row: Record<string, unknown>) => void;
  onDelete?: (row: Record<string, unknown>) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  title,
  data,
  filters = {},
  searchPlaceholder = "Search...",
  onEdit,
  onDelete,
}) => {
  const [search, setSearch] = useState("");
  const [currentFilters, setCurrentFilters] = useState(filters);
  const [sortState, setSortState] = useState<SortState>({ column: "", direction: null });

  const filterData = (
    data: Array<Record<string, unknown>>,
    search: string,
    filters: { [key: string]: string[] }
  ) => {
    return data.filter(
      (item) =>
        Object.values(item).some((val) =>
          typeof val === "string" && val.toLowerCase().includes(search.toLowerCase())
        ) &&
        Object.entries(filters).every(
          ([key, value]) =>
            value.length === 0 || (item[key] && value.includes(String(item[key])))
        )
    );
  };

  const sortData = (
    data: Array<Record<string, unknown>>,
    sortState: SortState
  ) => {
    if (!sortState.column || !sortState.direction) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortState.column];
      const bValue = b[sortState.column];
      if (aValue && bValue && aValue < bValue) return sortState.direction === "asc" ? -1 : 1;
      if (aValue && bValue && aValue > bValue) return sortState.direction === "asc" ? 1 : -1;
      return 0;
    });
  };

  const handleSort = (column: string) => {
    if (sortState.column === column) {
      setSortState({
        column,
        direction:
          sortState.direction === "asc"
            ? "desc"
            : sortState.direction === "desc"
            ? null
            : "asc",
      });
    } else {
      setSortState({ column, direction: "asc" });
    }
  };

  const handleFilterChange = (key: string, value: string, checked: boolean) => {
    setCurrentFilters((prev) => ({
      ...prev,
      [key]: checked ? [...prev[key], value] : prev[key].filter((item) => item !== value),
    }));
  };

  const filteredData = sortData(filterData(data, search, currentFilters), sortState);

  const SortIcon = ({ column }: { column: string }) => {
    if (sortState.column !== column) return <ArrowUpDown className="ml-2 h-4 w-4" />;
    if (sortState.direction === "asc") return <ArrowUp className="ml-2 h-4 w-4" />;
    if (sortState.direction === "desc") return <ArrowDown className="ml-2 h-4 w-4" />;
    return <ArrowUpDown className="ml-2 h-4 w-4" />;
  };

  // Dynamically determine the table columns based on the data
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-secondary">{title}</h2>
        <div className="flex items-center">
          {Object.keys(filters).length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-r-none border-r-0">
                  <Filter className="h-4 w-4 text-neutralLight" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.entries(filters).map(([key, values]) =>
                  values.map((value) => (
                    <DropdownMenuCheckboxItem
                      key={value}
                      checked={currentFilters[key]?.includes(value)}
                      onCheckedChange={(checked) => handleFilterChange(key, value, checked)}
                    >
                      {value}
                    </DropdownMenuCheckboxItem>
                  ))
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Input
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm rounded-l-none text-neutralLight"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table className="border border-background bg-neutralGray w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-secondary">Select</TableHead>
              {columns.map((col) => (
                <TableHead
                  key={col}
                  onClick={() => handleSort(col)}
                  className="cursor-pointer text-secondary"
                >
                  {col}
                  <SortIcon column={col} />
                </TableHead>
              ))}
              <TableHead className="text-right text-secondary">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-background">
            {filteredData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                {columns.map((col) => {
                  const value = row[col];
                  return (
                    <TableCell key={col} className="text-neutralLight">
                      {renderCellValue(value)}
                    </TableCell>
                  );
                })}
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit && onEdit(row)}
                    className="text-primary"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete && onDelete(row)}
                    className="text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
