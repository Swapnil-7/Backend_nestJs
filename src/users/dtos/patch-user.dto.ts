/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";


export class PatchUsersDto extends PartialType(CreateUserDto) {
  
}