<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class BookController extends Controller
{
    public function store(Request $request)
    {
        $validate = $request->validate([
            'bk_title' => 'required|string|max:255',
            'bk_description' => 'required|string',
            'bk_price' => 'required|numeric|min:0',
            'bk_stock' => 'required|integer|min:0',
            'bk_image' => 'required|image|max:2048',
        ]);

        $book = Book::create($validate);
        $book->addMediaFromRequest('bk_image')->toMediaCollection('covers');
        return redirect()->route('dashboard')->with('success', 'Book registered successfully!');
    }

    public function index()
    {
        $books = Book::where('bk_approval', 'pending')->get()->map(function ($book) {
            return [
                'bk_id' => $book->bk_id,
                'bk_title' => $book->bk_title,
                'bk_description' => $book->bk_description,
                'bk_price' => $book->bk_price,
                'bk_stock' => $book->bk_stock,
                'bk_approval' => $book->bk_approval,
                'bk_created_at' => Carbon::parse($book->bk_created_at)->format('Y-m-d H:i:s'),
                'bk_updated_at' => Carbon::parse($book->bk_updated_at)->format('Y-m-d H:i:s'),
                'bk_image' => $book->getFirstMediaUrl('covers'),
            ];
        });
        return Inertia::render('books/pending-approval', [
            'books' => $books,
        ]);
    }

    public function list()
    {
        $books = Book::with('media')->get()->map(function ($book) {
            return [
                'bk_id' => $book->bk_id,
                'bk_title' => $book->bk_title,
                'bk_description' => $book->bk_description,
                'bk_price' => $book->bk_price,
                'bk_stock' => $book->bk_stock,
                'bk_approval' => $book->bk_approval,
                'bk_created_at' => Carbon::parse($book->bk_created_at)->format('Y-m-d H:i:s'),
                'bk_updated_at' => Carbon::parse($book->bk_updated_at)->format('Y-m-d H:i:s'),
                'bk_image' => $book->getFirstMediaUrl('covers'),
            ];
        });


        return Inertia::render('books/list', [
            'books' => $books,
        ]);
    }

    public function approve(Book $book)
    {
        $book->update(['bk_approval' => 'approve']);
        return back()->with('success', 'Request approved.');
    }

    public function reject(Book $book)
    {
        $book->update(['bk_approval' => 'reject']);
        return back()->with('success', 'Request rejected.');
    }
}
