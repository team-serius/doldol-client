// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;
  const isAuthenticated = !!token;

  const { pathname } = request.nextUrl;

  // ❗ 비로그인 상태에서 보호 페이지 접근 → 로그인 페이지로
  if (!isAuthenticated && isProtectedPath(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // ✅ 로그인 상태에서 공개 페이지 접근 → 대시보드로 리디렉션
  if (isAuthenticated && isPublicPath(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

function isProtectedPath(pathname: string): boolean {
  const protectedPaths = ['/dashboard', '/profile', '/settings'];
  return protectedPaths.some((path) => pathname.startsWith(path));
}

function isPublicPath(pathname: string): boolean {
  const publicPaths = ['/login', '/signup'];
  return publicPaths.some((path) => pathname.startsWith(path));
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/login',
    '/signup',
  ],
};
