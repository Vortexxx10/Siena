import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

//authMidelware
export async function authMidelware(request: NextRequest) {
  return await updateSession(request);
}

const middlewares = [authMidelware];

export async function middleware(req: NextRequest) {
  for (const m of middlewares) {
    const res = await m(req);
    if (res != null) return res;
  }
  return NextResponse.next();
}
