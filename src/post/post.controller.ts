/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller,Get,Param, Post } from '@nestjs/common';
import { PostService } from './providers/post.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('post')
@ApiTags('Post')
export class PostController {
    constructor(private readonly PostService:PostService){}

    @Get('/:userId?')
    public getPost(@Param('userId') userId:string ){
        return this.PostService.findAll(userId);

    }

    @Post()
    public createPost(@Body() createPostDto:CreatePostDto){
        console.log(createPostDto);

    }
}
