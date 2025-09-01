import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <nav>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
          <span>SWE-One</span>
        </Link>
      </nav>
      <nav>
        <Link href="/about">
          <span>About</span>
        </Link>
      </nav>
      <nav>
        <Link href="/contact">
          <span>Contact</span>
        </Link>
      </nav>
    </header>
  );
}