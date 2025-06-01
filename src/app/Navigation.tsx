import Link from "next/link";

function Navigation() {
  return (
    <div className="bg-gray-400">
      <div className="container flex justify-evenly p-4">
        <div className="logo">
          <h2 className="text-3xl bg-amber-400"> Trading Bot </h2>
        </div>
        <ul className="flex justify-evenly gap-5">
          <Link href="/">Home</Link>
          <Link href="/">Trading bot</Link>
          <Link href="/login">Login</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
