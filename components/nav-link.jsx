"use client";

import Link from "next/link";

const NavLink = ({ link }) => {

  return (
    <Link className={`rounded p-1 ${link.active && "bg-black dark:bg-primary dark:text-black text-white"}`} href={link.href}>
      {link.label}
    </Link>
  );
};

export default NavLink;