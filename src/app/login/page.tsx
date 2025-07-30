"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Giriş Yap</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        onClick={() => signIn("auth0")}
      >
        Auth0 ile Giriş Yap
      </button>
    </div>
  );
}
