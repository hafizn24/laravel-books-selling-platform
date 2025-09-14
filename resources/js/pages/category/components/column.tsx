import { ColumnDef } from "@tanstack/react-table";

export type TypeCategory = {
    ct_id: number;
    ct_title: string;
    ct_description: string;
    ct_created_at: string;
    ct_updated_at: string;
};

export const columns: ColumnDef<TypeCategory>[] = [
    { accessorKey: "ct_title", header: "Title" },
    { accessorKey: "ct_description", header: "Description" }
];

export type PageProps = {
    flash?: { success?: string };
    category: TypeCategory[];
};
