<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

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
}
