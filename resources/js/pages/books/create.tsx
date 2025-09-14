import AppLayout from '@/layouts/app-layout';

import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from "@/components/ui/textarea"

export default function Create() {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="mx-auto w-full md:w-2/5 flex h-full flex-col gap-4 overflow-x-auto rounded-xl p-4 md:border md:mt-10">
                <Head title="Book Register" />
                <h3 className="text-center font-bold">Book Register</h3>
                <Form
                    method="post"
                    action="/books"
                    disableWhileProcessing
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="bk_title">Title</Label>
                                    <Input
                                        id="bk_title"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="title"
                                        name="bk_title"
                                        placeholder="Book title"
                                        value="Testing purpose"
                                    />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="bk_description">Description</Label>
                                    <Textarea
                                        id="bk_description"
                                        required
                                        tabIndex={2}
                                        autoComplete="description"
                                        name="bk_description"
                                        placeholder="Brief description of the book"
                                        rows={4}
                                        value="Testing purpose"
                                    />
                                    <InputError message={errors.description} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="bk_price">Price</Label>
                                    <Input
                                        id="bk_price"
                                        type="number"
                                        required
                                        tabIndex={3}
                                        autoComplete="price"
                                        name="bk_price"
                                        placeholder="e.g. 10.00"
                                        value="10"
                                    />
                                    <InputError message={errors.price} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="bk_stock">Stock</Label>
                                    <Input
                                        id="bk_stock"
                                        type="number"
                                        required
                                        tabIndex={4}
                                        autoComplete="stock"
                                        name="bk_stock"
                                        placeholder="e.g. 50"
                                        min="0"
                                        value="50"
                                    />
                                    <InputError message={errors.stock} />
                                </div>

                                <Button type="submit" className="mt-2" tabIndex={5}>
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    Register Book
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    )
}
