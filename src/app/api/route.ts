import dbConnect from "@/app/lib/db/client";

export async function GET() {
  try {
    const conn = await dbConnect();
    const state = conn.connection.readyState;

    return Response.json({
      message: "MongoDB connected",
      state,
    });
  } catch (err: any) {
    return Response.json(
      { error: "MongoDB connection failed", details: err.message },
      { status: 500 }
    );
  }
}
