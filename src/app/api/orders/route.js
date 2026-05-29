import { NextResponse } from "next/server";

import {
  sendTelegramMessage,
} from "@/services/telegramService";

export async function POST(req) {

  try {

    const order =
      await req.json();

    console.log(
      "Order Received:",
      order
    );

    const telegramResult =
      await sendTelegramMessage(
        order
      );

    return NextResponse.json({
      success: true,
      telegramResult,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error.message ||
          "Failed to send order",
      },
      {
        status: 500,
      }
    );

  }

}