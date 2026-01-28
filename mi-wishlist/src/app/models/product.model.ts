// src/app/models/product.model.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string; // URL de la imagen
  selected: boolean; // Para saber si está en la wishlist visualmente
}

