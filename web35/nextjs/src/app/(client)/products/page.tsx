import ProductList from "@/app/_shared/_components/ProductList";
import { getProducts } from "@/app/_shared/product/Service";
import Link from "next/link";

type ProductList = {
  params: {
    page: number;
    pageSize: number;
  };
};

export default async function Product({
  params: { page = 1, pageSize = 10 },
}: ProductList) {
  const {
    products: product,
    total,
    limit,
    skip,
  } = await getProducts({ limit: pageSize, page: page });

  const totalPage = Math.ceil(total / limit);

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

      <ProductList product={product} />

      {[...Array(totalPage)].map((_, index) => {
        const pageNumber = index + 1;
        const isCurrentPage = page === pageNumber;

        const href = index === 0 ? "/products" : `/products?page=${pageNumber}`;

        if (isCurrentPage) {
          return <button>{pageNumber}</button>;
        }

        return (
          <Link key={href} href={href}>
            <button>{pageNumber}</button>
          </Link>
        );
      })}
    </>
  );
}
