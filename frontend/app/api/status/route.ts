import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5001";

export async function GET() {
  try {
    const res = await fetch(`${API_URL}`, { cache: "no-store" });
    const data = await res.json();
    return NextResponse.json({ status: data.status === "online" ? "online" : "offline" });
  } catch (error) {
    return NextResponse.json({ status: "offline" });
  }
}