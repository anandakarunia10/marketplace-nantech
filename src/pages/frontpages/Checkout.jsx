import { useCart } from "../../utils/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { cart, setCart } = useCart(); // kita butuh clear cart nanti
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert("Pilih metode pembayaran dulu!");
      return;
    }

    // ✅ simulasi payment
    setIsPaid(true);
    setCart([]); // kosongkan cart setelah bayar
  };

  if (isPaid) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-green-600">Pembayaran Berhasil ✅</h1>
        <p className="mt-2">Terima kasih sudah berbelanja!</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-orange-700 mb-4">Checkout</h1>

      {/* Ringkasan belanja */}
      <div className="border border-orange-300 rounded-lg p-4 bg-orange-50 mb-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} x {item.qty}
            </span>
            <span>Rp {(item.price * item.qty).toLocaleString()}</span>
          </div>
        ))}
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-orange-700">
          <span>Total</span>
          <span>Rp {total.toLocaleString()}</span>
        </div>
      </div>

      {/* Form pembayaran */}
      <form onSubmit={handlePayment} className="space-y-4">
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full border border-orange-300 rounded p-2"
        >
          <option value="">-- Pilih Metode Pembayaran --</option>
          <option value="transfer">Transfer Bank</option>
          <option value="ewallet">E-Wallet (OVO, Dana, Gopay)</option>
          <option value="cod">COD (Bayar di tempat)</option>
        </select>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          Bayar Sekarang
        </button>
      </form>
    </div>
  );
}
