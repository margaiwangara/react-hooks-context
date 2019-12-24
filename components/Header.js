import React from "react";
import Link from "next/link";

import Home from "../components/Home";
import Contact from "../components/Contact";

export default function Header() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>home</a>
        </Link>
      </li>

      <li>
        <Link href="/contact">
          <a>contact</a>
        </Link>
      </li>
      <li>
        <Link href="/data">
          <a>data</a>
        </Link>
      </li>
    </ul>
  );
}
