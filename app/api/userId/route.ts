import { getUsers } from "@/lib/getUsers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let id = await request.json();
  console.log("route handler, received request, id: ", id);

  const users = await getUsers();
  let data = users[id];
  console.log("data", data);

  return NextResponse.json({ data });
}
