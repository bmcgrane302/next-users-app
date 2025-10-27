import { NextResponse } from "next/server";
import { getUserById, getFriendsByIds } from "@/lib/mock-db";

export async function GET(req, context) {
  const { id } = await context.params;

  const user = await getUserById(Number(id));
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const friends = await getFriendsByIds(user.friendIds);
  const userWithFriends = { ...user, friends };

  return NextResponse.json(userWithFriends, { status: 200 });
}
