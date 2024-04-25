import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}
  
    async getAllProducts(){
      const allProducts = await this.productModel.find();
      return allProducts;
    }

    async getProductByItemCode(itemCode: string) {
        const product = await this.productModel.findOne({itemCode: {$eq: itemCode}})
        return product;
    }
}
