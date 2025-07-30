import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Yetkisiz erişim</p>;
  }

  return (
    <div>
      <h1>Korumalı Sayfa</h1>
      <p>Hoş geldin {session.user?.email}</p>
    </div>
  );
}
