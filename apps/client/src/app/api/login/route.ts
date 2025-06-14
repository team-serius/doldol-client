// /app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { postLogin } from "@/services/auth"; // 실제 API 호출
import {
  ACCESS_COOKIE_MAX_AGE,
  REFRESH_COOKIE_MAX_AGE,
} from "@/common/constants/variables";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { id, password } = body;

  try {
    const res = await postLogin({ id, password });

    const accessToken = res.data.data.accessToken;
    const refreshToken = res.data.data.refreshToken;

    const response = NextResponse.json(
      { message: "Login success", data: res.data },
      { status: 200 },
    );

    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: ACCESS_COOKIE_MAX_AGE,
    });

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: REFRESH_COOKIE_MAX_AGE,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "아이디 혹은 비밀번호가 일치하지 않습니다." },
      { status: 401 },
    );
  }
}
