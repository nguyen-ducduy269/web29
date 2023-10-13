import Link from "next/link";

export default function Card() {
  return (
    <>
      <h1>Card</h1>
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
    </>
  );
}
