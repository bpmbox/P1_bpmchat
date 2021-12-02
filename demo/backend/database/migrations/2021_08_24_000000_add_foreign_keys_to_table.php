<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToTable extends Migration
{
    public function up()
    {
    
        Schema::table('users', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');
        
        });
        
        Schema::table('books', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');
        
            $table->unsignedBigInteger('author')->nullable();
            $table->foreign('author')->references('id')->on('users');
        
        });
        
        Schema::create('books_tags_tags', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('books_id')->unsigned();
            $table->unsignedBigInteger('tags_id')->unsigned();
            $table->foreign('books_id')->references('id')->on('books');
            $table->foreign('tags_id')->references('id')->on('tags');
        });
        
        Schema::table('tags', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');
        
        });
        
        Schema::table('table_4', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');
        
        });
        
        Schema::table('table_5', function (Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');
        
        });
        
        Schema::table('files', function(Blueprint $table) {
            $table->foreign('created_by_user')->references('id')->on('users');
            $table->foreign('updated_by_user')->references('id')->on('users');
        });
    }

    public function down()
    {
        //
    }
}
    
