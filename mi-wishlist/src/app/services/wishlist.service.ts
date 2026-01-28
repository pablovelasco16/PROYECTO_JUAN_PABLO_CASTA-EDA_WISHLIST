import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  // 1. SIGNAL DE ESTADO (La lista maestra de productos)
  // Inicializamos con datos "hardcodeados" como pide el reto (mínimo 6)
  products = signal<Product[]>([
    { id: 1, name: 'Google Pixel 10 Pro', price: 19999.00, image: 'https://th.bing.com/th/id/OIP.Ph13c_Z9UvKeBoRMzmDrWgHaEW?w=316&h=187&c=7&r=0&o=7&cb=defcache2&dpr=1.5&pid=1.7&rm=3&defcache=1', selected: false },
    { id: 2, name: 'Pelota De Basketball', price: 85.00, image: 'https://th.bing.com/th/id/OIP.wKb2tJoToog-MHyByVoapwHaHa?w=193&h=194&c=7&r=0&o=7&cb=defcache2&dpr=1.5&pid=1.7&rm=3&defcache=1', selected: false },
    { id: 3, name: 'Mouse Gamer', price: 850.50, image: 'https://th.bing.com/th/id/OIP.wajTmn_0gYV_yyVyCYu_cgHaHa?w=210&h=210&c=7&r=0&o=7&cb=defcache2&dpr=1.5&pid=1.7&rm=3&defcache=1', selected: false },
    { id: 4, name: 'Triciclo Apache', price: 5500.00, image: 'https://http2.mlstatic.com/D_NQ_NP_973708-MLM80458844322_112024-O.webp', selected: false },
    { id: 5, name: 'Yeezy Slides', price: 2000.00, image: 'https://th.bing.com/th/id/OIP.Gvj5-eDUTpQ6jLrY8s41egHaEc?w=287&h=180&c=7&r=0&o=7&cb=defcache2&dpr=1.5&pid=1.7&rm=3&defcache=1', selected: false },
    { id: 6, name: 'botas de piel de avestruz', price: 2680.00, image: 'https://http2.mlstatic.com/D_NQ_NP_702275-MLM82313257165_022025-O-bota-vaquera-linea-premium-en-piel-autentica-de-avestruz.webp', selected: false },
  ]);

  // 2. SIGNAL COMPUTADA (El cálculo automático)
  // Se actualiza SOLA cuando cambia la señal 'products'.
  totalPayable = computed(() => {
    return this.products()
      .filter(p => p.selected)
      .reduce((sum, current) => sum + current.price, 0);
  });

  // 3. SIGNAL COMPUTADA (Opcional, para saber cuántos items hay)
  selectedCount = computed(() => {
    return this.products().filter(p => p.selected).length;
  });

  // MÉTODOS PARA MODIFICAR EL ESTADO
  toggleSelection(productId: number) {
    this.products.update(currentProducts => 
      currentProducts.map(p => 
        p.id === productId ? { ...p, selected: !p.selected } : p
      )
    );
  }
}