import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-8">
      <nav className="flex justify-between items-center w-full">
        <Link href="/">
          <span className="text-2xl font-bold">SWE-One</span>
        </Link>
        <div className="flex justify-center items-center gap-4">
            <Link href="/">
                <span>Home</span>
            </Link>
            <Link href="/about">
                <span>About</span>
            </Link>
            <Link href="/contact">
                <span>Contact</span>
            </Link>
        </div>
      </nav>
    </header>
  );
}