import { type NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db";

// Pantry API Route

export async function GET() {
  const items = await db.pantryItem.findMany({
    orderBy: {
      category: "asc",
    },
  });
  return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
  console.log(request);
}
