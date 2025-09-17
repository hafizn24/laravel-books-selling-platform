<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Book extends Model implements HasMedia
{
    use HasSlug;
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
        'bk_ct_id',
        'bk_user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'bk_user_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'bk_ct_id');
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('bk_title')
            ->saveSlugsTo('slug');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
