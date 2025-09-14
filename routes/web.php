<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookController;

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
    Route::post('books', [BookController::class, 'store'])->name('books.store');
    Route::put('books/{book}/approve', [BookController::class, 'approve'])->name('books.approve');
    Route::put('books/{book}/reject', [BookController::class, 'reject'])->name('books.reject');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
