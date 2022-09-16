import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ObjectId } from 'mongoose';

export class AddCategoryDto {
  @ApiProperty({
    enum: ['名称'],
  })
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(10)
  name: string;
  @ApiProperty({
    required: false,
  })
  parentId?: ObjectId;
}
