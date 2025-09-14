<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Carbon\Carbon;
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

    public function list()
    {
        $category = Category::get()->map(function ($i) {
            return [
                'ct_id' => $i->ct_id,
                'ct_title' => $i->ct_title,
                'ct_description' => $i->ct_description,
                'ct_created_at' => Carbon::parse($i->ct_created_at)->format('Y-m-d H:i:s'),
                'ct_updated_at' => Carbon::parse($i->ct_updated_at)->format('Y-m-d H:i:s'),
            ];
        });


        return Inertia::render('category/main', [
            'category' => $category,
        ]);
    }
}
