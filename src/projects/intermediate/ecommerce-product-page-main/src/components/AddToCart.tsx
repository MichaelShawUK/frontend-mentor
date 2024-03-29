import { useState } from "react";

import { useAppDispatch } from "../hooks/useStore";
import { addQuantityToCart } from "../app/cartSlice";

import CartIcon from "../svg/CartIcon";
import MinusIcon from "../svg/MinusIcon";
import PlusIcon from "../svg/PlusIcon";

function AddToCart() {
  const dispatch = useAppDispatch();

  const [quantity, setQuantity] = useState("1");

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    console.log(quantity);
    dispatch(addQuantityToCart(+quantity));
  }

  function decrementQuantity() {
    setQuantity((amount) => {
      let quantity = +amount;
      return Math.max(0, --quantity).toString();
    });
  }

  function incrementQuantity() {
    setQuantity((amount) => {
      let quantity = +amount;
      return Math.min(99, ++quantity).toString();
    });
  }

  function changeQuantity(event: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(event.target.value);
  }

  function badInputHandler(event: React.FocusEvent<HTMLInputElement>) {
    if (event.target.value === "") setQuantity("0");
    if (+event.target.value < 0) setQuantity("0");
    if (+event.target.value > 99) setQuantity("99");
  }

  return (
    <form className="add-to-cart" onSubmit={submitHandler}>
      <div className="quantity-input">
        <button type="button" className="decrement" onClick={decrementQuantity}>
          <MinusIcon width="13" />
        </button>
        <input
          type="number"
          className="quantity"
          onChange={changeQuantity}
          onBlur={badInputHandler}
          value={quantity}
        />
        <button type="button" className="increment" onClick={incrementQuantity}>
          <PlusIcon width="13" />
        </button>
      </div>
      <button className="primary cart-push">
        <CartIcon color="white" height="18" width="20" />
        <span>Add to cart</span>
      </button>
    </form>
  );
}

export default AddToCart;
