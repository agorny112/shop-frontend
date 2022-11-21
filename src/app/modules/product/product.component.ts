import {Component, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {Product} from "./model/Product";
import {Page} from "../../shared/model/Page";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  page!:  Page<Product>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.getProductsPage(0, 10);
  }

  onPageEvent(event: PageEvent) {
    this.getProductsPage(event.pageIndex, event.pageSize);
  }

  private getProductsPage(page: number, size: number) {
    this.productService.getProducts(page, size)
      .subscribe(page => this.page = page);
  }
}
