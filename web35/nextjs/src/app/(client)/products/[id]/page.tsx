import Link from "next/link";
import "@/app/globals.css";

export default async function ProductsDetail() {
  return (
    <>
      <h1>Chi tiết sản phẩm</h1>
      <Link href={"/"}>
        <button>Home</button>
      </Link>
      <Link href="/products">
        <button>Product</button>
      </Link>
    </>
  );
}
