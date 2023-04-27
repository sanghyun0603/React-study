import Link from "next/link";
import { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}
export default function Navbar({ children }: NavbarProps) {
  return (
    <div className="navbar">
      <Link href="/">Home</Link>
      <Link href="/list">List</Link>
      <Link href="/abc/def">homework1</Link>
      <Link href="/cart">Cart</Link>
      {children}
    </div>
  );
}
