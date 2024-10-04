/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostService {

    constructor(private readonly userService:UsersService){

    }
    public findAll(userId:string){
        // console.log(userId);
        const user = this.userService.findOneById(userId);
        return [
            {
             user:user,
            title:"Test Title",
            content:"Test Content",

        },
        {
            user:user,
            title:"Test Title 2",
            content:"Test Content 2",

        }
    ]
    }
}
