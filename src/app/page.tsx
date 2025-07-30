"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      {!session ? (
        <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-sm text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Hoş geldin!</h1>
          <p className="text-gray-600 mb-6">Devam etmek için giriş yap.</p>
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            onClick={() => signIn("auth0")}
          >
            Giriş Yap
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-sm text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Merhaba {session.user?.name} 👋
          </h1>
          <p className="text-gray-600 mb-6">Başarıyla giriş yaptın.</p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
}
