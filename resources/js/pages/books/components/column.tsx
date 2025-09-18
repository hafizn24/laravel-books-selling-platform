import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { router } from '@inertiajs/react';
import { toast } from 'sonner';
import { BookDetailModal } from "./approval-book-details";

export type Book = {
    bk_id: number;
    name: string;
    ct_title: string;
    bk_title: string;
    bk_description: string;
    bk_price: number;
    bk_stock: number;
    bk_approval: "pending" | "approval" | "cancel";
    bk_created_at: string;
    bk_image: string;
};

export const columns: ColumnDef<Book>[] = [
    {
        accessorKey: "bk_title",
        header: "Title",
        cell: ({ row }) => <div>{row.getValue("bk_title")}</div>,
    },
    {
        accessorKey: "ct_title",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Category <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const ct_title = new String(row.getValue("ct_title"));
            return <div>{ct_title.toString()}</div>;
        },
    },
    {
        accessorKey: "bk_description",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Description <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const bk_description = new String(row.getValue("bk_description"));
            return <div>{bk_description.toString()}</div>;
        },
    },
    {
        accessorKey: "bk_price",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Price <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const bk_price = new String(row.getValue("bk_price"));
            return <div>{bk_price.toString()}</div>;
        },
    },
    {
        accessorKey: "bk_stock",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Stock <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const bk_stock = new String(row.getValue("bk_stock"));
            return <div>{bk_stock.toString()}</div>;
        },
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Seller's Name <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const name = new String(row.getValue("name"));
            return <div>{name.toString()}</div>;
        },
    },
    {
        accessorKey: "bk_approval",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Approval Status <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const bk_approval = new String(row.getValue("bk_approval"));
            return <div>{bk_approval.toString()}</div>;
        },
    },
    {
        accessorKey: "bk_created_at",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Created <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue("bk_created_at"));
            return <div>{date.toLocaleString()}</div>;
        },
    }
    ,
    {
        id: "actions",
        cell: ({ row }) => {
            const book = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <BookDetailModal book={book} />
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

export const pendingColumns: ColumnDef<Book>[] = [
    {
        accessorKey: "bk_title",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Title <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const title = new String(row.getValue("bk_title"));
            return <div>{title.toString()}</div>;
        },
    },
    {
        accessorKey: "ct_title",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Category <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const ct_title = new String(row.getValue("ct_title"));
            return <div>{ct_title.toString()}</div>;
        },
    },
    {
        accessorKey: "bk_price",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Price <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const bk_price = new String(row.getValue("bk_price"));
            return <div>{bk_price.toString()}</div>;
        },
    },
    {
        accessorKey: "bk_stock",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Stock <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const bk_stock = new String(row.getValue("bk_stock"));
            return <div>{bk_stock.toString()}</div>;
        },
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Seller's Name <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const name = new String(row.getValue("name"));
            return <div>{name.toString()}</div>;
        },
    },
    {
        accessorKey: "bk_created_at",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Created <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue("bk_created_at"));
            return <div>{date.toLocaleString()}</div>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const book = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <BookDetailModal book={book} />
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => 
                                router.put(`/books/approve/${book.bk_id}`, {}, {
                                    preserveScroll: true,
                                    onSuccess: () => toast.success("Request approved"),
                                })
                            }
                        >
                            Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() =>
                                router.put(`/books/reject/${book.bk_id}`, {}, {
                                    preserveScroll: true,
                                    onSuccess: () => toast.success("Request cancelled"),
                                })
                            }
                        >
                            Reject
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];