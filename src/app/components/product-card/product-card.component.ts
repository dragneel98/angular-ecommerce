import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() favoriteOnclick = new EventEmitter<void>();
  @Output() cartOnclick = new EventEmitter<void>();

  favorite = false;

  // Asignamos los íconos a propiedades públicas
  faHeart: IconDefinition = faHeart;
  faHeartBroken: IconDefinition = faHeartBroken;

  toggleFavorite() {
    this.favorite = !this.favorite;
    this.favoriteOnclick.emit();
  }
}
