interface Props {
  limit: number;
  page: number;
}

export async function getProducts({ limit = 10, page = 1 }: Props) {
  const skip = (page - 1) * limit;
  // Lấy danh sách sản phẩm từ API dummyjson
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );

  // Kiểm tra kết quả request
  if (!res.ok) {
    // Ném ra lỗi, lỗi sẽ được bắt và hiển thị bởi error.js gần nhất
    throw new Error("Failed to fetch data");
  }

  // Trả về kết quả
  return res.json();
}

interface Props {
  id: number;
}

export const getProductById = async (props: Props) => {
  const res = await fetch(`https://dummyjson.com/products/${props.id}`);

  if (res.ok) return res.json();
};
