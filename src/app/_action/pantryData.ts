"use server";

import { db } from "~/server/db";

export async function getPantryData(userId: string) {
  const pantryItems = await db.pantryItem.findMany({
    where: {
      userId: userId,
    },
  });
  return { pantryItems };
}
