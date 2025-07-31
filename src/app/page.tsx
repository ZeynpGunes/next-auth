"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session } = useSession();

  const handleSignOut = () => {
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
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <header className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
        <div className="flex items-center gap-4">
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full border-2 border-white shadow-sm"
            />
          )}
          <h1 className="text-2xl font-bold tracking-tight">
            {session?.user?.name}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleSignOut}
            className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-1.5 px-4 rounded-full transition cursor-pointer"
          >
            Çıkış
          </button>
        </div>
      </header>

      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Hoş geldin {session?.user?.name?.split(" ")[0]}
        </h2>

        <section className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Fırat Üniversitesi Adli Bilişim Mühendisliği mezunuyum, Adli Bilişim
            Mühendisliği alanında yüksek lisans yapmaktayım. 5 yılı aşkın
            süredir React, Next.js ve React Native teknolojileriyle aktif olarak
            mobil ve web tabanlı projelerde yer aldım. Kamu, sağlık, finans ve
            e-ticaret gibi çeşitli sektörlerde çalışmalar yürüttüm. Sistem
            analizi, kullanıcı deneyimi ve takım içi iş birliği konularında
            yetkinliğimle projelere uçtan uca değer katmayı amaçlıyorum.
          </p>
        </section>

        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/zeynep-g%C3%BCne%C5%9F-b93773164/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition text-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.3-2.6 4.8-2.6 5.1 0 6.1 3.4 6.1 7.9V24h-5V14.3c0-2.3 0-5.3-3.2-5.3s-3.6 2.5-3.6 5.1V24h-5V8z" />
            </svg>
            LinkedIn Profilim
          </a>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 p-4">
        © {new Date().getFullYear()} Zeynep tarafından tasarlandı.
      </footer>
    </div>
  );
}
