import  db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const data = await db.order.findMany({});
      console.log("Fetched data: ", data); // Log the fetched data
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      console.error("[GET ORDER ERROR]:", error); // Log the error
      return NextResponse.json({ message: "Internal Server Error", error: error }, { status: 500 });
    }
  }
  
