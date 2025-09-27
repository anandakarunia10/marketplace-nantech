import { useCart } from "../utils/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <img src={product.img} alt={product.name} className="w-32 h-32 mb-2" />
      <h2 className="font-semibold">{product.name}</h2>
      <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
      <button
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img, // ⚡ jangan lupa ini
          })
        }
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
