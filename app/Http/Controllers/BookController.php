<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    public function create()
    {
        $category = Category::select('ct_id', 'ct_title')->get();

        return Inertia::render('books/create', [
            'category' => $category,
        ]);
    }
    public function store(Request $request)
    {
        $validate = $request->validate([
            'bk_title' => 'required|string|max:255',
            'bk_description' => 'required|string',
            'bk_price' => 'required|numeric|min:0',
            'bk_stock' => 'required|integer|min:0',
            'bk_image' => 'required|image|max:2048',
            'bk_ct_id' => 'required|exists:categories,ct_id',
        ]);

        $store = Book::create([
            'bk_title' => $request->bk_title,
            'bk_description' => $request->bk_description,
            'bk_price' => $request->bk_price,
            'bk_stock' => $request->bk_stock,
            'bk_user_id' => auth()->id(),
            'bk_ct_id' => $request->bk_ct_id,
            'bk_created_at' => now(),
            'bk_updated_at' => now(),
        ]);


        $store->addMediaFromRequest('bk_image')->toMediaCollection('covers');
        return redirect()->route('dashboard')->with('success', 'Book registered successfully!');
    }

    public function index()
    {
        $books = Book::with(['user', 'category', 'media'])
            ->where('bk_approval', 'pending')
            ->get()
            ->map(function ($book) {
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
                    'name' => $book->user?->name,
                    'ct_title' => $book->category?->ct_title,
                ];
            });
        return Inertia::render('books/pending-approval', [
            'books' => $books,
        ]);
    }

    public function list()
    {
        $user = Auth::user();
        $query = Book::with(['user', 'category', 'media']);

        if ($user->hasRole('seller')) {
            $query->where('bk_user_id', $user->id);
        }

        $books = $query->get()
            ->map(function ($book) {
                return [
                    'bk_id' => $book->bk_id,
                    'bk_title' => $book->bk_title,
                    'bk_description' => $book->bk_description,
                    'bk_price' => $book->bk_price,
                    'bk_stock' => $book->bk_stock,
                    'bk_approval' => ucfirst($book->bk_approval),
                    'bk_created_at' => Carbon::parse($book->bk_created_at)->format('Y-m-d H:i:s'),
                    'bk_updated_at' => Carbon::parse($book->bk_updated_at)->format('Y-m-d H:i:s'),
                    'bk_image' => $book->getFirstMediaUrl('covers'),
                    'name' => $book->user?->name,
                    'ct_title' => $book->category?->ct_title,
                ];
            });


        return Inertia::render('books/list', [
            'books' => $books,
        ]);
    }

    public function approve($bk_id)
    {
        $book = Book::where('bk_id', $bk_id)->firstOrFail();
        $book->update(['bk_approval' => 'approve']);
        return back()->with('success', 'Request approved.');
    }

    public function reject($bk_id)
    {
        $book = Book::where('bk_id', $bk_id)->firstOrFail();
        $book->update(['bk_approval' => 'reject']);
        return back()->with('success', 'Request rejected.');
    }

    public function show(Book $book)
    {
        return response()->json([
            'title' => $book->bk_title,
            'description' => $book->bk_description,
            'price' => $book->bk_price,
            'stock' => $book->bk_stock,
            'slug' => $book->slug,
        ]);
    }
}
