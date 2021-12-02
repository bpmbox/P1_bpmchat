<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string("firstName")->nullable();
            $table->string("lastName")->nullable();
            $table->string("phoneNumber")->nullable();
            $table->string("email")->nullable();
            $table->enum("role", ["admin","user"],)->nullable();
            $table->boolean("disabled")->nullable();
            $table->string("password")->nullable();
            $table->boolean("emailVerified")->nullable();
            $table->string("emailVerificationToken")->nullable();
            $table->timestamp("emailVerificationTokenExpiresAt")->nullable();
            $table->string("passwordResetToken")->nullable();
            $table->timestamp("passwordResetTokenExpiresAt")->nullable();
            $table->string("provider")->nullable();
            
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}

    
