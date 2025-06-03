import Image from "next/image";

export default function Home() {
  return (
    <section className=" text-white h-[90vh] flex items-center justify-between px-16">
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Master Your Trades.
        </h1>
        <p className="text-xl text-gray-300">
          Log, analyze, and optimize every trade. Gain the edge your strategy
          deserves.
        </p>
        <div className="flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl text-white font-semibold">
            Start Journaling — It’s Free
          </button>
          <button className="border border-white px-6 py-3 rounded-xl text-white font-semibold">
            See How It Works
          </button>
        </div>
      </div>
      <div>
        {/* Image or dashboard mockup */}
        <Image
          src="/dashboard.png"
          width={500}
          height={500}
          alt="Trading dashboard"
          className="rounded-2xl shadow-lg max-w-md"
        />
      </div>
    </section>
  );
}
