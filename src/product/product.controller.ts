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

    @Get(':itemCode')
    async getProductByItemCode(
        @Param('itemCode') itemCode: string
    ) {
        return await this.productService.getProductByItemCode(itemCode);
    }

    @Post('add')
    async addOneProduct(
        @Body() product: Product,
    ){
        console.log(product);
        return await this.productService.addProduct(product);
    }

}
