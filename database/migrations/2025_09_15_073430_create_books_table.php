<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id('bk_id');
            $table->unsignedBigInteger('bk_user_id')->nullable();
            $table->unsignedBigInteger('bk_ct_id')->nullable();
            $table->string('bk_title');
            $table->text('bk_description')->nullable();
            $table->decimal('bk_price', 8, 2)->default(0);
            $table->integer('bk_stock')->default(0);
            $table->string('bk_approval')->default('pending');
            $table->timestamp('bk_created_at')->nullable();
            $table->timestamp('bk_updated_at')->nullable();
            $table->string('slug')->unique();

            $table->foreign('bk_user_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('bk_ct_id')->references('ct_id')->on('categories')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
