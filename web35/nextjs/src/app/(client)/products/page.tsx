import Link from "next/link";

export default function Product() {
  return (
    <>
      <h1>Product</h1>
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

      <Link href={`/products/${Math.random}`}>
        <button>Products Detail</button>
      </Link>
    </>
  );
}
