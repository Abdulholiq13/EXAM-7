import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, decrementCart, deleteAllCart } from "@/context/slices/cartSlices";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementCart(item));
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image_url} alt="" />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div className="cart-controls">
              <button onClick={() => handleDecrement(item)}>-</button>
              <button onClick={() => handleIncrement(item)}>+</button>
              <button onClick={() => handleRemove(item._id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
