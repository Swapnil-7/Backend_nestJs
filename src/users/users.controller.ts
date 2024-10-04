/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller,Get,Post,Patch,Put,Param,Query,Body,Req,
    Headers,Ip,Res, HttpStatus,ParseIntPipe,ValidationPipe} from '@nestjs/common';
import { Request,Response } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-user-param.dto';
import { PatchUsersDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(private readonly userService:UsersService){

    }

    
    @Get('/:id')
    @ApiOperation({
        summary:'fetches a list of registered users on the application',

    })
    @ApiResponse({
        status:200,
        description:'Users fetched successfully base on query'
    })
    @ApiQuery({
        name:'limit',
        type:'number',
        required:false,
        description:'The number of entries  return per query',
        example:10
    })
    public getUsers(@Param() getUserParamDto:GetUsersParamDto | undefined,
     @Query('limit',ParseIntPipe) limit:number | undefined){
        //   console.log(typeof id);
           console.log(getUserParamDto);
          console.log(limit);
        return this.userService.findAll(getUserParamDto,limit);
    }

    // @Get('/:id')
    // public getUsersId(@Param() getUserParamDto:GetUsersParamDto | undefined,
    //  @Query('limit',ParseIntPipe) limit:number | undefined){
    //     //   console.log(typeof id);
    //        console.log(getUserParamDto);
    //       console.log(limit);
    //     return this.userService.findAll(getUserParamDto,limit);
    // }


    // @Get()
    // public getUsers(){
    //     return "you sent a get request to user endpoints"
    // }

    // @Get('/:id')
    // public getUsers(@Param() params:any, @Query() query:any){
    //       console.log(params);
    //       console.log(query);
    //     return "you sent a get request to user endpoints"
    // }

    // @Get('/:id/:optional?')
    // public getUsers(@Param('id') id:any, @Query('limit') limit:any){
    //       console.log(typeof id);
    //       console.log( typeof limit);
    //     return "you sent a get request to user endpoints"
    // }

    //  @Get('/:id')
    // public getUsers(@Param() getUserParamDto:GetUsersParamDto | undefined,
    //  @Query('limit',ParseIntPipe) limit:number | undefined){
    //     //   console.log(typeof id);
    //        console.log(getUserParamDto);
    //       console.log(limit);
    //     return "you sent a get request to user endpoints"
    // }

    // @Get('/:id')
    // public getUsers(@Param('id',ParseIntPipe) id:number | undefined, @Query('limit',ParseIntPipe) limit:number | undefined){
    //       console.log(typeof id);
    //       console.log( id);
    //       console.log(limit);
    //     return "you sent a get request to user endpoints"
    // }

  

    // @Post()
    // public creatUsers(@Res() res: Response){
    //     res.status(HttpStatus.CREATED).send();
    //     return "you sent a get request to user endpoints"
    // }

     @Post()
    public creatUsers(@Body() request:CreateUserDto){
        console.log(request instanceof CreateUserDto);
        return "you sent a get request to user endpoints"
    }

    // @Post()
    // public creatUsers(@Body('email') email:any){
    //     console.log(email);
    //     return "you sent a get request to user endpoints"
    // }

    // @Post()
    // public creatUsers(@Body() request:any){
    //     console.log(request);
    //     return "you sent a get request to user endpoints"
    // }

    // @Post()
    // public creatUsers(@Req() request:Request){
    //     console.log(request);
    //     return "you sent a get request to user endpoints"
    // }
     
    @Patch()
    public patchUser(@Body() patchUserDto:PatchUsersDto){
        return patchUserDto;
        
    }

    @Put()
    public updateUsers(){
        return "user information updated"
    }



}
