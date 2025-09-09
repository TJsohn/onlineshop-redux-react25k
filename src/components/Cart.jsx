import { useAppSelector } from '../hooks/hooks';

function Cart() {
  const cartItems = useAppSelector(state => state.cart.cart);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} (x{item.quantity})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;