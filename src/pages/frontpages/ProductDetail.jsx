// src/pages/frontpages/ProductDetail.jsx
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { products } from "../../utils/data";
import { useCart } from "../../utils/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useCart();

  let p = location.state;

  if (!p && id) {
    p = products.find((prod) => prod.id === parseInt(id));
  }

  if (!p) {
    return (
      <h1 className="text-xl text-orange-600 font-semibold">
        Produk tidak ditemukan
      </h1>
    );
  }

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !review.trim()) return;

    const newReview = {
      id: Date.now(),
      rating,
      review,
    };

    setReviews([...reviews, newReview]);
    setRating(0);
    setReview("");
  };

  return (
    <div className="p-6 space-y-6 flex flex-col lg:flex-row gap-6">
      {/* Detail Produk */}
      <section className="flex-1">
        <div className="border border-orange-200 rounded-lg p-4 shadow-sm hover:shadow-md bg-orange-50">
          <img
            src={p.img}
            alt={p.name}
            className="w-full max-w-md rounded-lg shadow mb-6 border border-orange-100"
          />
          <h1 className="text-2xl font-bold text-orange-800">{p.name}</h1>
          <p className="mt-2 text-orange-700">{p.description}</p>
          <p className="mt-4 text-lg font-semibold text-orange-600">
            Rp {p.price.toLocaleString()}
          </p>
          <p className="text-sm text-orange-500 mt-1">Stok: {p.stock}</p>
          <p className="text-sm text-yellow-500 mt-1">⭐ {p.rating}</p>

          <button
            onClick={() =>
              addToCart({
                id: p.id,
                name: p.name,
                price: p.price,
                img: p.img,
              })
            }
            className="mt-6 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            Tambah ke Keranjang
          </button>
        </div>
      </section>

      {/* Review Section */}
      <section className="flex-1">
        <h2 className="text-xl font-semibold mb-4 text-orange-700">
          Ulasan ({reviews.length})
        </h2>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex space-x-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`text-2xl ${
                  star <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-orange-200"
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </button>
            ))}
          </div>

          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Tulis ulasanmu..."
            className="w-full border border-orange-300 rounded p-2 mb-3 focus:ring-orange-500 focus:border-orange-500"
            rows="3"
          />

          <button
            type="submit"
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
          >
            Submit Ulasan
          </button>
        </form>

        <div className="space-y-4">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="border border-orange-200 rounded p-3 shadow-sm bg-orange-50"
            >
              <div className="text-yellow-500">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
              <p className="text-orange-700 mt-1">{r.review}</p>
            </div>
          ))}

          {reviews.length === 0 && (
            <p className="text-orange-400">Belum ada ulasan.</p>
          )}
        </div>
      </section>
    </div>
  );
}