/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/providers/auth.service';



@Module({
  imports: [UsersModule, PostModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
