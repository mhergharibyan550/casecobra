import { type NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const corsOptions = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, rsc, next-router-prefetch, next-router-state-tree, next-url",
  };

  if (request.method === "OPTIONS") {
    const preflightHeaders = {
      ...{
        "Access-Control-Allow-Origin":
          "https://casecobra-umber-five.vercel.app/",
      },
      ...corsOptions,
    };
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  const response = NextResponse.next();

  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://casecobra-umber-five.vercel.app/"
  );

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}
