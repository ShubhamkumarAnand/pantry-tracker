"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/db";

export async function getUsers() {
  const users = await db.user.findMany({
    orderBy: {
      username: "asc",
    },
  });
  return users;
}

export async function addUser(formData: FormData) {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const user = await db.user.create({
    data: {
      username,
      email,
    },
  });
  console.log(user);
  return revalidatePath("/user");
}
