"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "~/server/db";

export async function addUser(formData: FormData) {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;

  const userData = await db.user.findFirst({
    where: {
      email,
      username,
    },
  });

  if (userData) {
    redirect(`/user/${userData?.id}`);
  }
  try {
    await db.user.create({
      data: {
        username,
        email,
      },
    });
  } catch (error: unknown) {
    console.log(error);
  }
  return revalidatePath("/user");
}
