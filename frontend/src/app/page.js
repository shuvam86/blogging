'use client';

import Link from "next/link";

export default function Home() {

  return (
    <div>
        <h1> Welcome </h1>
        <Link href="/about"> About </Link>
        <Link href="/signin"> Sign In </Link>
    </div>
  );
}
