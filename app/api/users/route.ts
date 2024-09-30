// app/api/users/route.ts
import { createClient } from "@/src/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const email = searchParams.get("email");
  const firstName = searchParams.get("first_name");
  const lastName = searchParams.get("last_name");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  const supabase = createClient();

  let query = supabase.from("users").select("*");

  if (id) {
    query = query.eq("id", id);
  }
  if (email) {
    query = query.eq("email", email);
  }
  if (firstName) {
    query = query.eq("first_name", firstName);
  }
  if (lastName) {
    query = query.eq("last_name", lastName);
  }

  if (page && limit) {
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    query = query.range(
      (pageNumber - 1) * limitNumber,
      pageNumber * limitNumber - 1
    );
  }

  const { data: users, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(users);
}

export async function PUT(request: NextRequest) {
  const { id, ...updateData } = await request.json();

  const supabase = createClient();

  const { data: updatedUser, error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  const supabase = createClient();

  const { data: archivedUser, error } = await supabase
    .from("users")
    .update({ status: "archived" })
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(archivedUser);
}
