import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  


  const { name, price, image, count, amountInStock } = product;

  
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>

        
        { count > amountInStock ? (
           <button className="remove">Out of Stock</button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
          ) }

      </div>
    </div>
  )
}
