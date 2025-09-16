<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    // All user routes
    Route::middleware(['role_or_permission:seller|admin'])->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('dashboard');
        })->name('dashboard');
        Route::get('books', function () {
            return Inertia::render('books/create');
        })->name('books');

        Route::post('books', [BookController::class, 'store'])->name('books.store');
        Route::get('books/list', [BookController::class, 'list'])->name('books.list');
    });

    // Admin-only routes
    Route::middleware(['role:admin'])->group(function () {
        Route::get('books/pending-approval', [BookController::class, 'index'])->name('books.pending-approval');
        Route::put('books/{book}/approve', [BookController::class, 'approve'])->name('books.approve');
        Route::put('books/{book}/reject', [BookController::class, 'reject'])->name('books.reject');

        Route::get('category', [CategoryController::class, 'list'])->name('category');
        Route::post('category', [CategoryController::class, 'createCategory'])->name('category.create');
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
