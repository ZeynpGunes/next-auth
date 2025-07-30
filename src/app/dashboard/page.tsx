"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Merhaba {session?.user?.name}
        </h1>
        <p className="text-gray-600 mb-6 ">Başarıyla giriş yaptın.</p>
        <button
          onClick={() =>
            signOut({ callbackUrl: "/login", redirect: true }).then(() => {
              window.localStorage.clear();
              window.sessionStorage.clear();
              document.cookie
                .split(";")
                .forEach(
                  (c) =>
                    (document.cookie = c
                      .replace(/^ +/, "")
                      .replace(
                        /=.*/,
                        "=;expires=" + new Date().toUTCString() + ";path=/"
                      ))
                );
            })
          }
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 cursor-pointer"
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}
