import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { Book, pendingColumns } from "./components/column";
import { DataTable } from './components/data-table';

export default function PendingApproval() {
    const { props } = usePage<{ books: Book[] }>();
    const pendingBooks = props.books.filter(book => book.bk_approval === "pending");

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="mx-auto w-full flex h-full flex-col gap-4 overflow-x-auto rounded-xl p-4 md:mt-10">
                <Head title="Book Approval" />
                <h3 className="text-center font-bold">Pending Approval</h3>
                <DataTable columns={pendingColumns} data={pendingBooks} />
            </div>
        </AppLayout>
    )
}
