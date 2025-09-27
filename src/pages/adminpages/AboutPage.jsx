import React from "react";

export default function AboutPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Admin</h1>
      <p className="text-gray-700">
        Halaman ini berisi informasi tentang panel admin. Kamu bisa menambahkan
        detail mengenai siapa pengelola sistem, tujuan dashboard, atau kontak
        jika ada masalah.
      </p>

      <div className="mt-6 p-4 border rounded bg-gray-50">
        <h2 className="text-lg font-semibold mb-2">Info Singkat</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Nama Aplikasi: MyShop Dashboard</li>
          <li>Versi: 1.0.0</li>
          <li>Dibuat: 2024</li>
        </ul>
      </div>
    </div>
  );
}
