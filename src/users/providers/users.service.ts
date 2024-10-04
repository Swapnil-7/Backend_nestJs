/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable ,Inject,forwardRef } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-user-param.dto";
import { AuthService} from "src/auth/providers/auth.service";

@Injectable()
export class UsersService{

    constructor( @Inject( forwardRef (() => AuthService) ) private readonly authService:AuthService){}

    public findAll(getUserParamDto:GetUsersParamDto,
        limit:number
    ){

        const isAuth = this.authService.isAuth();
        console.log(isAuth);
        return [
            {
                firstName:'John',
                email:'john@doe.com'
            },
            {
                firstName:'Alice',
                email:'alice@doe.com'
            },
            // {
            //     firstName:'John',
            //     email:'john@doe.com'
            // },
        ];
    }

    

    public findOneById(id:string){
     return  {
        id:1234,
        firstName:'John',
        email:'john@doe.com'
    }
    }

}