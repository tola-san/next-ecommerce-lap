import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      "https://api.pexels.com/v1/search",
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY,
        },
        params: {
          query: "fashion shopping",
          per_page: 5,
          orientation: "landscape",
        },
      }
    );

    console.log("Pexels API Response:", response.data);

    return NextResponse.json(response.data.photos);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}