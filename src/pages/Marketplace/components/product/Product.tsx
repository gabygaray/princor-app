import "./styles.css";

import { IProduct } from "../../../../app/store/slices/appStateSlice.interface";
import { useNavigate } from "react-router-dom";

export interface ProductProps {
  product: IProduct;
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const navigate = useNavigate();
  const handleSelectProduct = () => {
    navigate(`/products/${product.product_id}`);
  };

  return (
    <div className="product-card-container" onClick={handleSelectProduct}>
      <div className="product-image">
        <div className="unity-container">{product.unity}</div>
        <img
          src={`https://raw.githubusercontent.com/gabygaray/princor-images-rep/main/images/${product.image_id}.png`}
        />
      </div>
      <div className="product-description">
        <div className="product-name">{product.name}</div>
        <div className="product-price">{`$${product.price}`}</div>
      </div>
    </div>
  );
};
