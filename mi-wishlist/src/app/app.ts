import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; 
import { WishlistService } from './services/wishlist.service';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [CommonModule, CurrencyPipe], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  private wishlistService = inject(WishlistService);

 
  products = this.wishlistService.products;
  total = this.wishlistService.totalPayable;
  count = this.wishlistService.selectedCount;

 
  toggleItem(id: number) {
    this.wishlistService.toggleSelection(id);
  }
}