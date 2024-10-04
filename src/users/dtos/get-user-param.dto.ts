/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ApiPropertyOptional } from "@nestjs/swagger";
/* eslint-disable prettier/prettier */
export class GetUsersParamDto{
@ApiPropertyOptional({
    description:'Get user with specific id',
    example:'1234'
})   
@IsOptional()
@IsInt()
@Type(()=> Number)
id?:number;
}