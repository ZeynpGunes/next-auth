"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleLogin = () => {
    setIsLoading(true);
    signIn("auth0");
  };

  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center w-full lg:w-1/2 px-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Giriş Yap</h1>
            <p className="text-gray-500">Auth0 ile hesabına bağlan</p>
          </div>

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 ${
              isLoading ? "bg-green-400" : "bg-green-500 hover:bg-green-600"
            } text-white font-semibold py-3 px-4 rounded-lg transition duration-200 cursor-pointer`}
          >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {isLoading ? "Giriş yapılıyor..." : "Auth0 ile Giriş Yap"}
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 bg-gray-900 items-center justify-center">
        <Image
          src="https://next-auth.js.org/img/logo/logo.png"
          alt="NextAuth.js Logo"
          className="max-w-[300px] w-full h-auto outline-none ring-0 focus:outline-none"
          width={300}
          height={100}
        />
      </div>
    </div>
  );
}
