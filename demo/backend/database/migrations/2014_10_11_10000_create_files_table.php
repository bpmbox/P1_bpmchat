<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->string('id', 2083);
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string('belongsTo')->nullable();
            $table->unsignedBigInteger('belongsToId')->nullable();
            $table->string('belongsToColumn')->nullable();
            $table->string('name', 2083);
            $table->integer('sizeInBytes')->nullable();
            $table->string('privateUrl', 2083)->nullable();
            $table->string('publicUrl', 2083);
            $table->boolean('paranoid')->default(true);
            $table->morphs('belongsTo');
            $table->string('belongsTo_column', 2083);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('files');
    }
}
