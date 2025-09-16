<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Book extends Model implements HasMedia
{
    use InteractsWithMedia;
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
    
    public function user()
    {
        return $this->belongsTo(User::class, 'bk_user_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'bk_ct_id');
    }
}
