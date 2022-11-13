import {Injectable} from '@angular/core';
import { Product } from './model/Product';
import * as Http from "http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("/api/products");

  }
}
