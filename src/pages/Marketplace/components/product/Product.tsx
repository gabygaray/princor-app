import "./styles.css";

import { Product as IProduct } from "../../../../app/store/slices/appStateSlice.interface";

export interface ProductProps {
  product: IProduct;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  // const productsImages= ['IMG_001.png', 'IMG_002.png']

  const handleSelectProduct = () => {
    console.log(product);
  };

  return (
    <div className="product-container" onClick={handleSelectProduct}>
      <div className="product-image">
        <div className="unity-container">{product.unity}</div>
        <img
          src={
            "https://raw.githubusercontent.com/gabygaray/princor-app/a5983019d676e506383df5173ed7161408c27a79/public/vite.svg"
          }
        />
      </div>
      <div className="product-description">
        <div className="product-name">{product.name}</div>
        <div className="product-price">{`$${product.price}`}</div>
      </div>
    </div>
  );
};
