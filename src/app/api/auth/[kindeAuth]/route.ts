import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";
export const GET = (req: NextRequest) => {
  const res = NextResponse.next();
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  req.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return handleAuth()(req, res);
};
