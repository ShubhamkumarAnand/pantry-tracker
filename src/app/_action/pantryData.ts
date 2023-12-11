"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

export async function getPantryData(userId: string) {
  const pantryItems = await db.pantryItem.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      category: "asc",
    },
  });
  return { pantryItems };
}

export async function addPantryData(userId: string, formData: FormData) {
  const name = formData.get("name") as string;
  const category = formData.get("category") as string;
  const quantity = Number(formData.get("quantity"));
  const suffix = formData.get("suffix") as string;

  const pantryItem = await db.pantryItem.create({
    data: {
      name,
      category,
      quantity,
      suffix,
      userId,
    },
  });
  console.log(pantryItem);
  return revalidatePath(`/user/${userId}`);
}

export async function deletePantryItem(id: string, userId: string) {
  const pantryItem = await db.pantryItem.delete({
    where: {
      id,
    },
  });
  console.log(pantryItem);
  return revalidatePath(`/user/${userId}`);
}
