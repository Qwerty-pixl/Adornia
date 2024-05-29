import { useContext } from "react";
import { AppContext } from "../../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import "./AddToCart.css";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart, // maintain the current content of the cart
      [product.id]: qty, // add the current product
    });
  }

  return (
    <div className="AddToCart">
      <button onClick={onAddToCartClick}>
        <span className="cart-quantity">{cart[product.id]}</span>
        <FontAwesomeIcon icon={faCartPlus} size="2x" />
      </button>
    </div>
  );
}
