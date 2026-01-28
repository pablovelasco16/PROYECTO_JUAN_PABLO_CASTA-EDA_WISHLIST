import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; // Añadimos CurrencyPipe explícitamente
import { WishlistService } from './services/wishlist.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // Importamos CurrencyPipe aquí para que el HTML lo reconozca
  imports: [CommonModule, CurrencyPipe], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  private wishlistService = inject(WishlistService);

  // Estas son las propiedades que el HTML está buscando
  products = this.wishlistService.products;
  total = this.wishlistService.totalPayable;
  count = this.wishlistService.selectedCount;

  // Este es el método que el (click) está buscando
  toggleItem(id: number) {
    this.wishlistService.toggleSelection(id);
  }
}