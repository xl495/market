import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddProductDto } from './dto/add-product.dto';
import { EditProductDto } from './dto/edit-product.dto';

import { ShopProductService } from './shop-product.service';
@Controller('shop/product')
@ApiTags('商品')
export class ShopProductController {
  constructor(private readonly productService: ShopProductService) {}
  @ApiOperation({
    summary: '获取商品详情',
  })
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async getDetail(@Query('id') id: string) {
    return this.productService.getDetail(id);
  }

  @ApiOperation({
    summary: '添加商品',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Post()
  async add(@Body() product: AddProductDto) {
    return this.productService.add(product);
  }

  @ApiOperation({
    summary: '编辑商品',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Put()
  async edit(@Body() product: EditProductDto) {
    const { _id, ...editData } = product;
    return this.productService.edit(_id, editData);
  }

  @ApiOperation({
    summary: '删除商品',
  })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Delete()
  async remove(@Query('id') id: string) {
    return this.productService.remove(id);
  }
}
