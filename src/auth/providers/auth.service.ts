/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Inject, Injectable,forwardRef } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor( @Inject(forwardRef(() => UsersService)) private readonly userService:UsersService){}
    public login(email:string,password:string){
        const user = this.userService.findOneById('1234');

        return 'Sample Token';

    }

    public isAuth(){
        return true;
    }


}
