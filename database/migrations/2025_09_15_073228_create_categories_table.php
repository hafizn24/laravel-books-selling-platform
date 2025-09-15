<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id('ct_id'); // Custom primary key
            $table->string('ct_title');
            $table->text('ct_description')->nullable();
            $table->timestamp('ct_created_at')->nullable();
            $table->timestamp('ct_updated_at')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};