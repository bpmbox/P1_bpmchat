<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTable5Table extends Migration
{
    public function up()
    {
        Schema::create('table_5', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->integer("newColumn")->unique();
            
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('table_5');
    }
}

    
