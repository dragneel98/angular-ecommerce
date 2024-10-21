import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'
  constructor(
    private http: HttpClient
  ) {}

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}`)
  }
}