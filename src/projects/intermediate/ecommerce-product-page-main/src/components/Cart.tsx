import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../assets/images/icon-delete.svg";

import { useAppSelector, useAppDispatch } from "../hooks/useStore";
import { selectCartQuantity, removeFromCart } from "../app/cartSlice";

function Cart() {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector(selectCartQuantity);

  return (
    <article className="cart">
      <h4>Cart</h4>
      <hr />
      {quantity === 0 && <p className="empty">Your cart is empty.</p>}
      {quantity > 0 && (
        <>
          <div className="item">
            <img src={thumbnail} className="thumbnail" />
            <p>
              Fall Limited Edition Sneakers $125.00 x {quantity}{" "}
              <span className="total">${(125 * quantity).toFixed(2)}</span>
            </p>
            <button onClick={() => dispatch(removeFromCart())}>
              <img src={deleteIcon} className="delete-icon" />
            </button>
          </div>
          <button className="primary checkout-btn">Checkout</button>
        </>
      )}
    </article>
  );
}

export default Cart;
