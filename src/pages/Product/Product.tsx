import { useParams } from "react-router-dom";
import { Product as IProduct } from "../../app/store/slices/appStateSlice.interface";

import "./styles.css";

const mockProduct: IProduct = {
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
};

export const Product = () => {
  const params = useParams();

  return <div className="product-container">{params.productId}</div>;
};
