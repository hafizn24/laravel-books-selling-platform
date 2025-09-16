import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { router } from "@inertiajs/react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

export type CategoryList = {
    ct_id: number;
    ct_title?: string;
    ct_description: string;
};

export const columns: ColumnDef<CategoryList>[] = [
    { accessorKey: "ct_title", header: "Title" },
    { accessorKey: "ct_description", header: "Description" },
    {
        id: "actions",
        cell: ({ row }) => {
            const category = row.original
            return (
                <Button
                    variant="destructive"
                    onClick={() => {
                        if (confirm(`Are you sure you want to delete "${category.ct_title}"?`)) {
                            router.delete(`/category/${category.ct_id}`, {
                                onSuccess: () => toast.success(`Category "${category.ct_title}" deleted.`),
                                onError: () => toast.error(`Failed to delete "${category.ct_title}".`),
                            });
                        }
                    }}
                >
                    <Trash2 />
                </Button>

            );
        },
    },
];
