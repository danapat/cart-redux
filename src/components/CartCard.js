import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import {increaseAmount} from "../store/productListSlice";
import "./CartCard.css";

export const CartCard = ({cartItem}) => {
  const dispatch = useDispatch();
  const {count, product} = cartItem;

  return (
      <div className="cartCard">
        <img src={product.image} alt={product.name} />
        <p className="productName">{product.name}</p>
        
        <p className="productPrice">${product.price}</p>
        <p className="productPrice">{count}</p>
        <button className="remove" onClick={() => {dispatch(remove(product)); dispatch(increaseAmount(product))}}>Remove</button>
      </div>
  )
}
