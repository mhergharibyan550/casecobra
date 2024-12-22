import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const origin = req.headers.get("origin");
  const allowedOrigin = process.env.NEXT_PUBLIC_APP_URL;

  if (origin === allowedOrigin) {
    const res = NextResponse.next();
    res.headers.set("Access-Control-Allow-Origin", origin);
    res.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.headers.set("Access-Control-Allow-Credentials", "true");
    return res;
  }

  return new Response("Forbidden: CORS policy does not allow this origin.", {
    status: 403,
  });
}

export const config = {
  matcher: "/api/:path*",
};
