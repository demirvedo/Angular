import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from "../services/alertify.service"
import { from } from 'rxjs';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private productService:ProductService) { }

  title = "Ürün Listesi"
  filterText = ""
  products!: Product[];
  

  ngOnInit(): void {

    this.productService.getProducts().subscribe(data=>{
      this.products=data
    });

  }

  addToCard(product: Product) {
    this.alertifyService.success("Sepete Eklendi : " + product.name)
  }

}
