import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../assets/images/icon-delete.svg";

import { useAppSelector } from "../hooks/useStore";
import { selectCartQuantity } from "../app/cartSlice";

function Cart() {
  const quantity = useAppSelector(selectCartQuantity);

  return (
    <article className="cart">
      <h4>Cart</h4>
      {quantity === 0 && <p>Your cart is empty.</p>}
      {quantity > 0 && (
        <>
          <img src={thumbnail} className="thumbnail" />
          <p>
            Fall Limited Edition Sneakers $125.00 x {quantity}{" "}
            <span className="total">${(125 * quantity).toFixed(2)}</span>
          </p>
          <img src={deleteIcon} className="delete-icon" />
          <button className="primary">Checkout</button>
        </>
      )}
    </article>
  );
}

export default Cart;
