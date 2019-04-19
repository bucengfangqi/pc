import { Component, OnInit } from '@angular/core';
import { product } from "@_shared/data/product-desc";
@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {

  constructor() { }
  product=product;
  checked_product=product[0];
  ngOnInit() {
  }

}
