import React from "react";
import WalletBalance from "../components/WalletBalance";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#f7f2ed]">
      {/* Sidebar */}
      <aside className="w-60 bg-[#343131] text-white p-4 space-y-6">
        <div className="text-lg font-bold mb-6">Trading App</div>
        <nav className="flex flex-col space-y-4">
          <button className="text-orange-500">Dashboard</button>
          <button>Trade Journal</button>
          <button>Add Trade</button>
          <button>Stats</button>
          <WalletBalance />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow">
            Total Profit/Loss
            <br />
            <span className="text-xl font-semibold">$1,200</span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            Win Rate
            <br />
            <span className="text-xl font-semibold">55%</span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            Number of Trades
            <br />
            <span className="text-xl font-semibold">20</span>
          </div>
        </div>

        {/* Graphs and Journal */}
        <div className="grid grid-cols-3 gap-4">
          {/* Profit/Loss Graph Placeholder */}
          <div className="col-span-2 bg-white p-4 rounded-2xl shadow">
            <div className="font-semibold mb-2">Profit/Loss</div>
            <div className="h-40 bg-orange-100 rounded"></div>
          </div>

          {/* Add Trade Placeholder */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <div className="font-semibold mb-2">Add Trade</div>
            <div className="h-32 flex items-center justify-center text-xl font-bold text-orange-500">
              55%
            </div>
          </div>
        </div>

        {/* Trade Journal */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="font-semibold mb-2">Trade Journal</div>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500">
                <th>Date</th>
                <th>Ticker</th>
                <th>Entry Price</th>
                <th>Exit Price</th>
                <th>PNL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td>Feb. 2023</td>
                <td>TUXER</td>
                <td>$14,000</td>
                <td>$1,000</td>
                <td className="text-green-500">10st</td>
              </tr>
              <tr className="border-t">
                <td>Feb. 2023</td>
                <td>TREBX</td>
                <td>$53,300</td>
                <td>$3,160</td>
                <td className="text-green-500">10m</td>
              </tr>
              <tr className="border-t">
                <td>Apr. 2023</td>
                <td>Jones</td>
                <td>$1,000</td>
                <td>Februarii</td>
                <td className="text-red-500">25x</td>
              </tr>
            </tbody>
          </table>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
            Add Trade
          </button>
        </div>

        {/* Stats */}
        <div className="bg-white p-4 rounded-2xl shadow grid grid-cols-2 gap-4">
          <div>
            <div className="font-semibold mb-2">Win Rate</div>
            <div className="h-24 w-24 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-lg font-bold">
              55%
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Risk/Reward Ratios</div>
            <div className="h-3 bg-orange-400 rounded mb-2 w-4/5"></div>
            <div className="h-3 bg-orange-200 rounded w-2/3"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
