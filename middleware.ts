import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['en', 'el'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (pathname === '/') {
        return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!pathnameHasLocale) {
        return NextResponse.redirect(
            new URL(`/${defaultLocale}${pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|assets|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};