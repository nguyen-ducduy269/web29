import Link from "next/link";
import "@/app/globals.css";

export default function ProductsDetail() {
  return (
    <>
      <h1>Chi tiết sản phẩm</h1>
      <Link href={"/"}>
        <button>Home</button>
      </Link>
    </>
  );
}
