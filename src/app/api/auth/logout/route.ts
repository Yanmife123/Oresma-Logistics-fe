import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// import { success } from "zod";
export async function POST() {
  try {
    const Cookies = await cookies();
    Cookies.delete("user");
    Cookies.delete("token");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Failed to logout" },
      { status: 500 }
    );
  }
}
