import { ColumnDef } from "@tanstack/react-table";
export type CategoryList = {
    ct_id: number;
    ct_title?: string;
    ct_description: string;
};

export const columns: ColumnDef<CategoryList>[] = [
    { accessorKey: "ct_title", header: "Title" },
    { accessorKey: "ct_description", header: "Description" },
];
