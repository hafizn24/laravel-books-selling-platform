import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { Book, columns } from "./components/column";
import { DataTable } from '../../components/data-table';

export default function Approval() {
    const { props } = usePage<{ books: Book[] }>();
    const books = props.books;

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="mx-auto w-full flex h-full flex-col gap-4 overflow-x-auto rounded-xl p-4 md:mt-10">
                <Head title="Book List" />
                <h3 className="text-center font-bold">Book List</h3>
                <DataTable columns={columns} data={books} />
            </div>
        </AppLayout>
    )
}
