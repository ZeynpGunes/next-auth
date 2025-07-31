import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  return Response.json({
    message: "JWT doğrulandı. Korunan veriye erişim sağlandı.",
    token,
  });
}
