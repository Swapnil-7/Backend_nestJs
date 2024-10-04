/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IsArray, IsEnum, IsISO8601, IsJSON, isNotEmpty, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength } from "class-validator";
import { postStatus } from "../enums/postStatus.enum";
import { postType } from "../enums/postType.enum";
import { createPostMetaOptionsDto } from "./create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

/* eslint-disable prettier/prettier */
export class CreatePostDto {
    @ApiProperty({
        description:'this is title for blog post'
    })
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    title:string;

    @ApiProperty({
        enum: postType,
        description: "Possible values  'post', 'page', 'story', 'series'",
      })
    @IsEnum(postType)
    @IsNotEmpty()
    postType:postType;

    @ApiProperty({
        description: "For example 'my-url'",
      })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message:
          'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
      })
    slug:string;

    @ApiProperty({
        enum: postStatus,
        description: "Possible values 'draft', 'scheduled', 'review', 'published'",
      })
    @IsEnum(postStatus)
    @IsNotEmpty()
    status:postStatus;

    @IsString()
    @IsOptional()
    content?:string;

    @ApiPropertyOptional({
        description:
          'Serialize your JSON object else a validation error will be thrown',
      })
    @IsOptional()
    @IsJSON()
    schema?:string;

    @IsOptional()
    @IsUrl()
    featuredImageUrl?:string;

    @ApiProperty({
        description: 'Must be a valid timestamp in ISO8601',
        example: '2024-03-16T07:46:32+0000',
      })
    @IsISO8601()
    @IsOptional()
    publishOn?:Date;

    
    @IsOptional()
    @IsArray()
    @IsString({each:true})
    @MinLength(3,{each:true})
    tags?:string[];

    @ApiPropertyOptional({
        type: 'array',
        required: false,
        items: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
          },
        },
      })
    @IsOptional()
    @IsArray()
    @Type(()=>createPostMetaOptionsDto)
    metaOptions: createPostMetaOptionsDto[];
}
