<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Files extends Model {
    protected static $unguarded = true;

    public function attachable()
    {
        return $this->morphTo();
    }
}
