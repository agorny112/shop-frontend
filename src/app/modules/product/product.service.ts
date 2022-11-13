import {Injectable} from '@angular/core';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): Product[] {
    return [
      {
        name: "Product 1",
        category: "Category 1",
        description: "Description of product 1",
        price: 10,
        currency: "USD",

      },
      {
        name: "Product 2",
        category: "Category 2",
        description: "Description of product 2",
        price: 20,
        currency: "USD",

      },
      {
        name: "Product 3",
        category: "Category 3",
        description: "Description of product 3",
        price: 30,
        currency: "USD",

      }
    ];

  }
}
