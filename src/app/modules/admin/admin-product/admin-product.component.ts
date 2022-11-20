import {Component, OnInit} from '@angular/core';
import {AdminProduct} from "./model/adminProduct";
import {AdminProductService} from "./admin-product.service";

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  dataSource: AdminProduct[] = [];
  displayedColumns: string[] = ["id", "name", "price"];

  constructor(private adminProductService: AdminProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.adminProductService.getProducts(0, 25)
      .subscribe(page => this.dataSource = page.content)
  }

}
