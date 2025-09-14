import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Book } from "./column";
import { useState } from "react";

export function BookDetailModal({ book }: { book: Book }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Book Details</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2 text-sm">
                        <p><strong>Title:</strong> {book.bk_title}</p>
                        <p><strong>Description:</strong> {book.bk_description}</p>
                        <p><strong>Price:</strong> RM {book.bk_price}</p>
                        <p><strong>Stock:</strong> {book.bk_stock}</p>
                        <p><strong>Approval:</strong> {book.bk_approval}</p>
                        <p><strong>Created At:</strong> {book.bk_created_at}</p>
                    </div>
                </DialogContent>
            </Dialog>

            <button
                className="w-full text-left px-2 py-1 text-sm hover:bg-muted"
                onClick={() => setOpen(true)}
            >
                View Details
            </button>
        </>

    );
}