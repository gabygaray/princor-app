// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
// import { fetchProducts } from "../../app/store/slices/appStateSlice";
import { Product as IProduct } from "../../app/store/slices/appStateSlice.interface";
import { ProductCard } from "./components/product/Product";
import "./styles.css";
// import axios from "axios";

const products_mock: IProduct[] = [
  {
    product_id: 1,
    name: "Mayonesa Mayodan Sachet",
    price: 1072.44,
    unity: "2.9Kg",
    description:
      "Elaborada con jugo de limón, liviana, reducida en calorías. Producto especialmente diseñado para el consumo gastronómico.",
    stock: 20,
    image_id: "IMG_001",
    category: {
      category_id: 1,
      name: "Aderezos",
    },
    brand: {
      brand_id: 7,
      name: "Dánica",
    },
  },
  {
    product_id: 2,
    name: "Mayonesa Mayodan Sachet",
    price: 1072.44,
    unity: "2.9Kg",
    description:
      "Elaborada con jugo de limón, liviana, reducida en calorías. Producto especialmente diseñado para el consumo gastronómico.",
    stock: 20,
    image_id: "IMG_001",
    category: {
      category_id: 1,
      name: "Aderezos",
    },
    brand: {
      brand_id: 7,
      name: "Dánica",
    },
  },
  {
    product_id: 3,
    name: "Mayonesa Mayodan Sachet",
    price: 1072.44,
    unity: "2.9Kg",
    description:
      "Elaborada con jugo de limón, liviana, reducida en calorías. Producto especialmente diseñado para el consumo gastronómico.",
    stock: 20,
    image_id: "IMG_001",
    category: {
      category_id: 1,
      name: "Aderezos",
    },
    brand: {
      brand_id: 7,
      name: "Dánica",
    },
  },
  {
    product_id: 4,
    name: "Mayonesa Mayodan Sachet",
    price: 1072.44,
    unity: "2.9Kg",
    description:
      "Elaborada con jugo de limón, liviana, reducida en calorías. Producto especialmente diseñado para el consumo gastronómico.",
    stock: 20,
    image_id: "IMG_001",
    category: {
      category_id: 1,
      name: "Aderezos",
    },
    brand: {
      brand_id: 7,
      name: "Dánica",
    },
  },
  {
    product_id: 5,
    name: "Mayonesa Mayodan Sachet",
    price: 1072.44,
    unity: "2.9Kg",
    description:
      "Elaborada con jugo de limón, liviana, reducida en calorías. Producto especialmente diseñado para el consumo gastronómico.",
    stock: 20,
    image_id: "IMG_001",
    category: {
      category_id: 1,
      name: "Aderezos",
    },
    brand: {
      brand_id: 7,
      name: "Dánica",
    },
  },
  {
    product_id: 6,
    name: "Mayonesa Mayodan Sachet",
    price: 1072.44,
    unity: "2.9Kg",
    description:
      "Elaborada con jugo de limón, liviana, reducida en calorías. Producto especialmente diseñado para el consumo gastronómico.",
    stock: 20,
    image_id: "IMG_001",
    category: {
      category_id: 1,
      name: "Aderezos",
    },
    brand: {
      brand_id: 7,
      name: "Dánica",
    },
  },
  {
    product_id: 7,
    name: "Mayonesa Mayodan Sachet",
    price: 1072.44,
    unity: "2.9Kg",
    description:
      "Elaborada con jugo de limón, liviana, reducida en calorías. Producto especialmente diseñado para el consumo gastronómico.",
    stock: 20,
    image_id: "IMG_001",
    category: {
      category_id: 1,
      name: "Aderezos",
    },
    brand: {
      brand_id: 7,
      name: "Dánica",
    },
  },
];

export const Marketplace = () => {
  const handleClick = async () => {
    console.log("hola");
  };

  return (
    <div className="marketplace-container">
      <div className="sidebar"></div>
      <div className="products-container">
        {products_mock.map((prod) => (
          <ProductCard key={prod.product_id} product={prod} />
        ))}
      </div>
    </div>
  );
};
