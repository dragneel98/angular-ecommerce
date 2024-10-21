import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/get-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  product: Product[] = []

  constructor( private productService: ProductService){}
  ngOnInit(): void {

  }
  onFavoriteClick(){

  }
  onCartClick(){

  }
}
