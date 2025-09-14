import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from "@/components/ui/textarea"
import { Form } from '@inertiajs/react';

export default function CategoryRegister() {
    return (
        <div className="flex flex-col gap-4 rounded-xl md:border p-4">
            <h3 className="text-center font-bold">Create Category</h3>
            <Form
                method="post"
                action="/category"
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="ct_title">Title</Label>
                                <Input
                                    id="ct_title"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="title"
                                    name="ct_title"
                                    placeholder="Book title"
                                    value="Testing purpose"
                                />
                                <InputError message={errors.title} className="mt-2" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="ct_description">Description</Label>
                                <Textarea
                                    id="ct_description"
                                    required
                                    tabIndex={2}
                                    autoComplete="description"
                                    name="ct_description"
                                    placeholder="Brief description of the book"
                                    rows={4}
                                    value="Testing purpose"
                                />
                                <InputError message={errors.description} />
                            </div>

                            <Button type="submit" className="mt-2" tabIndex={5}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Create New Category
                            </Button>
                        </div>
                    </>
                )}
            </Form>
        </div>
    )
}
