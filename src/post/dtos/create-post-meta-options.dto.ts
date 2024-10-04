/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
/* eslint-disable prettier/prettier */
export class createPostMetaOptionsDto{
   @IsString()
   @IsNotEmpty()
    key:string;

    @IsNotEmpty()
    value:any;

}