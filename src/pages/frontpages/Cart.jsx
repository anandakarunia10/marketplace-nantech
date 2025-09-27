// src/pages/frontpages/Cart.jsx
import { useCart } from "../../utils/CartContext";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center text-orange-500 font-medium">
        Cart is empty
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-orange-700">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border border-orange-300 p-4 rounded-lg shadow-md bg-orange-50"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-md border border-orange-200"
              />
              <div>
                <h2 className="font-semibold text-orange-800">{item.name}</h2>
                <p className="text-orange-600">
                  Rp {item.price.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="number"
                value={item.qty}
                min="1"
                className="w-16 border border-orange-300 rounded text-center text-orange-700 focus:ring-orange-500 focus:border-orange-500"
                onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}