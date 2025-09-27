import { Link } from "react-router-dom";
import { products } from "../../utils/data";

export default function Dashboard() {
  return (
    <div className="p-6 bg-orange-50 min-h-screen">
      {/* Judul */}
      <h1 className="text-3xl font-bold mb-8 text-orange-700 text-center">
        Dashboard Produk
      </h1>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-4 shadow-lg hover:shadow-xl bg-white hover:border-orange-400 transition duration-200"
          >
            {/* Gambar produk */}
            <div className="w-full aspect-[4/3] overflow-hidden rounded mb-4">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nama produk */}
            <h2 className="font-semibold text-lg text-gray-800 line-clamp-2">
              {p.name}
            </h2>

            {/* Harga produk */}
            <p className="text-orange-600 font-bold text-lg mb-2">
              Rp {p.price.toLocaleString()}
            </p>

            {/* Tombol detail */}
            <Link
              to={`/product/${p.id}`}
              state={p}
              className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}