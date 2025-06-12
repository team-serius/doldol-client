// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { ACCESS_TOKEN_KEY } from '@/lib/config/env';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value;
  const pathname = request.nextUrl.pathname;

  console.log(accessToken, pathname);

  const isAuthPath = pathname.startsWith('/auth');

  // 로그인한 사용자가 /auth 접근 시 → /
  if (accessToken && isAuthPath) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // 로그인 안한 사용자가 /auth 외 접근 시 → /auth/login
  if (!accessToken && !isAuthPath) {
    const url = request.nextUrl.clone();
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
