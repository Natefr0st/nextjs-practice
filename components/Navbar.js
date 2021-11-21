import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          alt="logo"
          src="/viking.png"
          width={150}
          height={150}
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/vikings">
        <a>Viking Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;