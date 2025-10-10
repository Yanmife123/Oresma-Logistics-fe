// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// async function authMiddleware(request: NextRequest) {
//   const Cookies = await cookies();
//   const token = request.cookies.get("token");
//   if (!token) {
//     Cookies.delete("user");
//     return NextResponse.redirect("/auth/login");
//   }
// }

// export async function middleware(request: NextRequest) {
//   const Cookies = await cookies();
//   //   const { pathname } = request.nextUrl;
//   const auth = await authMiddleware(request);
//   if (auth) return auth;

//   // confirm user
//   const userCookie = Cookies.get("user")?.value;
//   const user = userCookie ? JSON.parse(userCookie) : null;
//   if (!user) {
//     Cookies.delete("token");
//     return NextResponse.redirect("/auth/login");
//   }

//   // role base authenticaton
//   //   const authPath = ["/dashboard"];
//   //   if (user.role === "admin" && !pathname.startsWith("/admin/dashboard")) {
//   //     return NextResponse.redirect("/admin/dashboard");
//   //   }
// }

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
