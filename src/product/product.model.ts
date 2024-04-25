import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    coverImgUrl: {type: String, required: true},
    productImgUrls: {type: Array, required: true},
    itemCode: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    brand: {type: String, required: true},
    limited: {type: Number, required: true},
    inStock: {type: Number, required: true},
    keyword: {type: String, required: true},
})

export interface Product {
    name: string;
    price: number;
    coverImgUrl: string;
    productImgUrls: string[];
    itemCode: string;
    description: string;
    type: string;
    brand: string;
    limited: number;
    inStock: number;
    keyword: string;
}