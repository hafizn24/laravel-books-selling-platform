import AppLayout from '@/layouts/app-layout';

import { Head, usePage } from '@inertiajs/react';
import CategoryRegister from './components/register'
import { useEffect } from 'react';
import { toast } from 'sonner';
import { DataTable } from '../../components/data-table';
import { columns, PageProps } from "./components/column";


export default function Category() {
    const { props } = usePage<PageProps>();
    const { flash, category } = props;
    console.log(props);
    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
    }, [flash]);

    return (
        <AppLayout>
            <Head title="Book Register" />
            <div className="mx-auto w-full max-w-7xl p-4 md:mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CategoryRegister />
                    <div className="flex flex-col gap-4 rounded-xl md:border p-4 overflow-x-auto">
                        <h3 className="text-center font-bold text-center">Category List</h3>
                        <DataTable columns={columns} data={category} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
