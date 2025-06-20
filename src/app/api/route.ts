import dbConnect from "@/app/lib/db/client";

export async function GET() {
  try {
    const conn = await dbConnect();
    const state = conn.connection.readyState;
    console.log("MongoDB connection is successfully.");
    return Response.json({
      message: "MongoDB connected",
      state,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return Response.json(
        { error: "MongoDB connection failed", details: err.message },
        { status: 500 },
      );
    }

    // fallback for unexpected error shape
    return Response.json(
      { error: "MongoDB connection failed", details: "Unknown error" },
      { status: 500 },
    );
  }
}
