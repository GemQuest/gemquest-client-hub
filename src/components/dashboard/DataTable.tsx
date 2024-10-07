// components/DataTable.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
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

interface Column {
  header: string;
  accessor: string;
  sortable?: boolean;
  filterable?: boolean; // Ajout de la propriété filterable
}

interface DataTableProps {
  title: string;
  columns: Column[];
  data: any[];
  filters?: { [key: string]: string[] };
  searchPlaceholder?: string;
}

const DataTable: React.FC<DataTableProps> = ({
  title,
  columns,
  data,
  filters = {},
  searchPlaceholder = "Search...",
}) => {
  const [search, setSearch] = useState("");
  const [currentFilters, setCurrentFilters] = useState(filters);
  const [sortState, setSortState] = useState<SortState>({ column: "", direction: null });

  const filterData = (data: any[], search: string, filters: { [key: string]: string[] }) => {
    return data.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(search.toLowerCase())
      ) &&
      Object.entries(filters).every(
        ([key, value]) => value.length === 0 || value.includes(item[key])
      )
    );
  };

  const sortData = (data: any[], sortState: SortState) => {
    if (!sortState.column || !sortState.direction) return data;
    return [...data].sort((a, b) => {
      if (a[sortState.column] < b[sortState.column]) return sortState.direction === "asc" ? -1 : 1;
      if (a[sortState.column] > b[sortState.column]) return sortState.direction === "asc" ? 1 : -1;
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

  const filteredData = sortData(filterData(data, search, currentFilters), sortState);

  const SortIcon = ({ column }: { column: string }) => {
    if (sortState.column !== column) return <ArrowUpDown className="ml-2 h-4 w-4" />;
    if (sortState.direction === "asc") return <ArrowUp className="ml-2 h-4 w-4" />;
    if (sortState.direction === "desc") return <ArrowDown className="ml-2 h-4 w-4" />;
    return <ArrowUpDown className="ml-2 h-4 w-4" />;
  };

  const handleFilterChange = (key: string, value: string, checked: boolean) => {
    setCurrentFilters((prev) => ({
      ...prev,
      [key]: checked ? [...prev[key], value] : prev[key].filter((item) => item !== value),
    }));
  };

  return (
    <div>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-secondary">{title}</h2>
            <div className="flex items-center">

            {Object.keys(filters).length > 0 && (
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                        variant="outline"
                        size="icon"
                        className="rounded-r-none border-r-0"
                        >
                        <Filter className="h-4 w-4 text-neutralLight" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {Object.entries(filters).map(([key, values]) =>
                        values.map((value) => (
                            <DropdownMenuCheckboxItem
                            key={value}
                            checked={currentFilters[key].includes(value)}
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
                            key={col.accessor}
                            onClick={() => col.sortable && handleSort(col.accessor)}
                            className={col.sortable ? "cursor-pointer text-secondary" : "text-secondary"}
                            >
                            {col.header}
                            {col.sortable && <SortIcon column={col.accessor} />}
                            </TableHead>
                        ))}
                        <TableHead className="text-right text-secondary">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-background">
                        {filteredData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                            <Checkbox />
                            </TableCell>
                            {columns.map((col) => (
                            <TableCell key={col.accessor} className="text-neutralLight">
                                {row[col.accessor]}
                            </TableCell>
                            ))}
                            <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                                <Pencil className="h-4 w-4 text-primary" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4 text-red-500" />
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
