"use client";
import { useQuery } from "@tanstack/react-query";

export default function WalletSummary() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["walletBalance"],
    queryFn: async () => {
      const res = await fetch("/api/wallet");
      if (!res.ok) throw new Error("Failed to fetch wallet balance");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading wallet...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4 border rounded bg-gray-900 text-white max-w-md">
      <h2 className="text-xl font-semibold mb-2">Wallet Balance</h2>
      <p>💰 Total Equity: {Number(data.totalEquity).toFixed(2)} BTC</p>
      <p>📉 Unrealized PnL: {Number(data.totalPerpUPL).toFixed(2)} BTC</p>
    </div>
  );
}
