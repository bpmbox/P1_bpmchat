<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Books extends Model {
    protected static $unguarded = true;

    public function author(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Users::class, 'author');
    }

    public function tags(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Tags::class, 
        'books_tags_tags', 'books_id', 'tags_id');
    }
}
    
