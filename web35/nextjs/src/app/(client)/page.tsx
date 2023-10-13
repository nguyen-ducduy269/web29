import Link from "next/link";
import "../globals.css";

export default function Client() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      <Link href="/about">
        <button>About Us</button>
      </Link>
      <Link href="/products">
        <button>Product</button>
      </Link>
      <Link href="/card">
        <button>Card</button>
      </Link>
      <Link href="/login">
        <button>Log In</button>
      </Link>
    </>
  );
}
