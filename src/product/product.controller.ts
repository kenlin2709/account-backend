import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('product')
export class ProductController {

    constructor(
        private readonly productService: ProductService,
    ){

    }

    @Get('products')
    async getAllProducts() {
        return await this.productService.getAllProducts();
    }

    @Get('itemCode/:itemCode')
    async getProductByItemCode(
        @Param('itemCode') itemCode: string
    ) {
        return await this.productService.getProductByItemCode(itemCode);
    }

    @Post('add')
    async addOneProduct(
        @Body() product: Product,
    ){
        return await this.productService.addProduct(product);
    }

    @Get('id/:id')
    async getProductById(
        @Param('id') id: string
    ) { 
        return await this.productService.getProductById(id);
    }

}
