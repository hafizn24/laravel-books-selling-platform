<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('books', function () {
        return Inertia::render('books/create');
    })->name('books');

    Route::get('books/list', [BookController::class, 'list'])->name('books.list');
    Route::get('books/pending-approval', [BookController::class, 'index'])->name('books.pending-approval');
    Route::put('books/{book}/approve', [BookController::class, 'approve'])->name('books.approve');
    Route::put('books/{book}/reject', [BookController::class, 'reject'])->name('books.reject');
    Route::post('books', [BookController::class, 'store'])->name('books.store');

    // In progress. update using controller later
    Route::get('category', function () {
        return Inertia::render('category/main');
    })->name(name: 'category');
    Route::post('category', [CategoryController::class, 'createCategory'])->name('category.create');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
