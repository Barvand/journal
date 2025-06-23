// app/api/wallet/route.ts
import { NextResponse } from "next/server";
import { RestClientV5 } from "bybit-api";

const client = new RestClientV5({
  testnet: false,
  key: process.env.BYBIT_API_KEY!,
  secret: process.env.BYBIT_API_SECRET!,
  recv_window: 15000, // 15 seconds tolerance
});

export async function GET() {
  try {
    const response = await client.getWalletBalance({ accountType: "UNIFIED" });
    const { totalEquity, totalPerpUPL } = response.result.list[0];

    return NextResponse.json({
      totalEquity,
      totalPerpUPL,
    });
  } catch (error: any) {
    console.error("Wallet error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
