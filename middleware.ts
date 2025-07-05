import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

const isUnprotected = ["/", "/sign-in", "/otp-verification"];

const isProtected = ["/dashboard", "/settings", "/billing"];

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  const url = request.nextUrl.pathname;

  if (url === "/otp-verification") {
    const email = request.nextUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  if (!sessionCookie && isProtected.some((path) => url.startsWith(path))) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (sessionCookie && isUnprotected.includes(url)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/",
    "/sign-in",
    "/otp-verification",
    "/dashboard", 
    "/settings", 
    "/billing",
  ],
};
