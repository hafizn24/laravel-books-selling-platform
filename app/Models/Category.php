<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $primaryKey = 'ct_id';

    public const CREATED_AT = 'ct_created_at';
    public const UPDATED_AT = 'ct_updated_at';

    protected $fillable = [
        'ct_title',
        'ct_description',
    ];
}
