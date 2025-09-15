<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function createCategory(Request $request)
    {
        $validate = $request->validate([
            'ct_title' => 'required|string|max:255',
            'ct_description' => 'required|string',
        ]);

        Category::create($validate);
        return redirect()->route('category')->with('success', 'New category created!');
    }

    public function list(Request $request)
    {
        $categoryList = Category::get()->map(function ($book) {
            return [
                'ct_title' => $book->ct_title,
                'ct_description' => $book->ct_description,
            ];
        });


        return Inertia::render('category/main', [
            'categoryList' => $categoryList,
        ]);
    }
}
