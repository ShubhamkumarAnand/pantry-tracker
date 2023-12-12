import { type NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";

// User API Route

export async function GET() {
  const users = await db.user.findMany({
    orderBy: {
      username: "asc",
    },
  });
  return NextResponse.json({ users }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const formData = await request.json();
  const username: string = formData.username;
  const email: string = formData.email;
  try {
    await db.user.create({
      data: {
        username,
        email,
      },
    });
  } catch (error) {
    return NextResponse.json({ message: error?.message });
  }
  return NextResponse.json({ message: { username, email } });
}
