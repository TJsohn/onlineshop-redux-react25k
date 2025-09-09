import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { Typography } from '@mui/material';
import { removeFromCart } from '../store/cartSlice';

function Cart() {
  const cartItems = useAppSelector(state => state.cart.cart);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} (x{item.quantity})
              <Typography variant="body2">
                <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
              </Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;