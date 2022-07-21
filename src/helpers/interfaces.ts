import React, { PropsWithoutRef } from "react";

export interface CategoryMenuProps {
  categories: string[];
}

export interface CategoryTileProps {
  category: string;
}

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: Rating;
}

export interface ProductTileProps {
  product: Product;
}

export interface ProductPageProps {
  category: string;
}
export interface CartProductTileProps {
  product: Product;
}
