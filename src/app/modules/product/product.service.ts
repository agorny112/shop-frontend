import {Injectable} from '@angular/core';
import { Product } from './model/Product';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../../shared/model/Page";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(page: number, size: number): Observable<Page<Product>> {
    return this.http.get<Page<Product>>(`/api/products?page=${page}&size=${size}`);

  }
}
