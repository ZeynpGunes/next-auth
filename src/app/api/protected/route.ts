import { getToken } from "next-auth/jwt";

export async function GET(req: Request) {
  const token = await getToken({ req });

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  return Response.json({
    message: "JWT doğrulandı. Korunan veriye erişim sağlandı.",
    token,
  });
}
