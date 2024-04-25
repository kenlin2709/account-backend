import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

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

}
