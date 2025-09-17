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
    { accessorKey: "ct_title", header: "Category" },
    { accessorKey: "bk_description", header: "Description" },
    { accessorKey: "bk_price", header: "Price" },
    { accessorKey: "bk_stock", header: "Stock" },
    { accessorKey: "name", header: "Seller Name" },
    { accessorKey: "bk_approval", header: "Approval Status" },
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
    { accessorKey: "bk_title", header: "Title" },
    { accessorKey: "ct_title", header: "Category" },
    { accessorKey: "bk_price", header: "Price" },
    { accessorKey: "bk_stock", header: "Stock" },
    { accessorKey: "name", header: "Seller Name" },
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
                                router.put(`/books/${book.bk_id}/approve`, {}, {
                                    preserveScroll: true,
                                    onSuccess: () => toast.success("Request approved"),
                                })
                            }
                        >
                            Approve
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() =>
                                router.put(`/books/${book.bk_id}/reject`, {}, {
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