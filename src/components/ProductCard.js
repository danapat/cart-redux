import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import {decreaseAmount} from "../store/productListSlice";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  


  const { name, price, image, amountInStock } = product;

  
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="stock">{amountInStock}</p>
      <div className="action">
        <p>${price}</p>

        { amountInStock > 0 ? (
          <button onClick={() => {
            dispatch(add(product));
            dispatch(decreaseAmount(product));
          }}>Add To Cart</button>
        ) : (
          <button className="remove">Out of Stock</button>
          ) }

      </div>
    </div>
  )
}
