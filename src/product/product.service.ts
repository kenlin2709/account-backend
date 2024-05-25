import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    async getProductById(id: string){
      const product = await this.productModel.findById(id);
      return product;
    }
  
    async getAllProducts(){
      const allProducts = await this.productModel.find();
      return allProducts;
    }

    async getProductByItemCode(itemCode: string) {
        const product = await this.productModel.findOne({itemCode: {$eq: itemCode}})
        return product;
    }

    async addProduct(product: Product) {
      const addedProduct = await this.productModel.create({
        ...product,
      })
      return addedProduct;
    }

    async editProduct(product: Product, id: string) {
      const editedProduct = await this.productModel.findByIdAndUpdate(id, product, {new: true});
      return editedProduct;
    }
}
