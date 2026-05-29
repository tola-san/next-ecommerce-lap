export async function sendTelegramMessage(order) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      throw new Error("Missing Telegram environment variables");
    }

    // Format products list
    const productsText = order.products
      .map((item) => `
• ${item.title}
   Qty: ${item.quantity}
   Price: $${item.price}
      `)
      .join("\n");

    const message = `
🛒 NEW ORDER

👤 Customer: ${order.firstName} ${order.lastName}
📞 Phone: ${order.phone}
📧 Email: ${order.email}
📍 Address: ${order.address}
🏙️ City: ${order.city}
📮 Postal Code: ${order.postalCode}
💳 Payment: ${order.payment}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${productsText}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 Subtotal: $${Number(order.subtotal || 0).toFixed(2)}
🚚 Shipping: $${Number(order.shipping || 0).toFixed(2)}
🧾 Tax:     $${Number(order.tax || 0).toFixed(2)}
✅ Total:   $${Number(order.total || 0).toFixed(2)}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    const data = await response.json();

    console.log("Telegram Response:", data);

    if (!data.ok) {
      throw new Error(data.description || "Failed to send Telegram message");
    }

    return data;
  } catch (error) {
    console.error("Telegram Error:", error);
    throw error;
  }
}