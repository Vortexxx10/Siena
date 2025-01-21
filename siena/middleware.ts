
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import { LinksEnum } from '@/utils/pagesLinksEnum';

export const config = {
    matcher: [
        "/",
        "/:path*",
        "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|).*)",
    ],
};

// const NO_AUTH_ROUTES = [LinksEnum.login, LinksEnum.password_reset];


//authMidelware
export const authMidelware = (req: NextRequest) => {
    const sessionCookies = req.cookies.get("session");
    // const currentPath = req.nextUrl.pathname;
    console.log(sessionCookies);
    

    // if (sessionCookies === null || sessionCookies === undefined || !sessionCookies) {
    //     if (NO_AUTH_ROUTES.some((route) => currentPath.includes(route))) {
    //         console.log("it's no auth route");
    //         return NextResponse.next();
    //     }
    //     return NextResponse.redirect(
    //         new URL(`/${LinksEnum.login}`, req.url)
    //     );
    // }

    // if (sessionCookies && NO_AUTH_ROUTES.some((route) => currentPath.includes(route))) {
    //     return NextResponse.redirect(new URL("/", req.url));
    // }

};


const middlewares = [
    authMidelware,
];

export async function middleware(req: NextRequest) {
    for (const m of middlewares) {
        const res = await m(req);
        if (res != null) return res;
    }
    return NextResponse.next();
}
