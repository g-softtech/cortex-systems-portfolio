import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  // On Vercel, if this serverless function executes, the system is online.
  return NextResponse.json({ status: "online" });
}