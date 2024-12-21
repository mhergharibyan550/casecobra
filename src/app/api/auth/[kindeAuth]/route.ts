import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const response = await handleAuth()(req, res);

  const modifiedResponse = new Response(response.body, response);

  modifiedResponse.headers.set("Access-Control-Allow-Origin", "*");
  modifiedResponse.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  modifiedResponse.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return modifiedResponse;
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
