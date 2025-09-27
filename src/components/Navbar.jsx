// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function Navbar() {
  const { totalQty } = useCart();

  return (
    <nav className="bg-gradient-to-r from-orange-100 via-orange-300 to-orange-500 border-b px-6 py-4 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/images/icon.png"
          alt="Logo Icon"
          className="w-6 h-6 object-contain"
        />
        <span className="font-bold text-lg text-orange-900">Nantech</span>
      </div>

      {/* Menu Navigasi */}
      <div className="flex gap-6">
        <Link
          to="/"
          className="text-orange-900 hover:text-white hover:bg-orange-600 px-3 py-1 rounded transition"
        >
          Dashboard
        </Link>
        <Link
          to="/cart"
          className="text-orange-900 hover:text-white hover:bg-orange-600 px-3 py-1 rounded flex items-center gap-1 transition"
        >
          Cart
          {totalQty > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 rounded-full">
              {totalQty}
            </span>
          )}
        </Link>
        <Link
          to="/checkout"
          className="text-orange-900 hover:text-white hover:bg-orange-600 px-3 py-1 rounded transition"
        >
          Checkout
        </Link>
      </div>

      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border border-orange-300 rounded px-3 py-1 text-sm focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
    </nav>
  );
}