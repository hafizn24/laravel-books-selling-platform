<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $primaryKey = 'bk_id';

    public const CREATED_AT = 'bk_created_at';
    public const UPDATED_AT = 'bk_updated_at';

    protected $fillable = [
        'bk_title',
        'bk_description',
        'bk_price',
        'bk_stock',
        'bk_approval',
    ];

}
