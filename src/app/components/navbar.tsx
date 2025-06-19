// app/components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" tw-i-brand shadow-md px-6 py-4 flex justify-between items-center bg-sky-950">
      <div className="text-xl font-bold text-blue-600">
        <i className="tw-i-prisma tw-i-tabler-prisma text-xl i-tabler-prisma"></i>
        MySite aaaaas
      </div>
      <ul className="flex  space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-500">
            Home <i className="i-mdi-home"></i>
            <div className="text-blue-600 text-3xl">
              dwadwdwaaaaaaaaaaaaa{" "}
              <i
                className="tw-i-tabler-brand-tailwind text-blue

"
              ></i>
            </div>
            <div>dadwadw</div>
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-500">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
