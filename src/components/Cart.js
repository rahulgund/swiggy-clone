import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch= useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

  return (
    <div>
      <h1>{cartItems.join(", ")}</h1>
      <h2>Now pay bill idiot</h2>
      <button className="border border-black rounded-md bg-red-400 p-2 m-2" onClick={handleClearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart;
