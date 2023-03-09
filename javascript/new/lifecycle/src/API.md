# Flow

1. Kiểm tra trạng thái đăng nhập (localStorage)
2. Nếu chưa có
   1. Hiển thị lên màn hình đăng nhập/đăng ký
   2. Đăng nhập/đăng ký xong lưu thông tin (token) vào localStorage
3. Hiển thị bảng Todo
4. Gọi api /api/todos lấy dữ liệu
5. Thêm các trình xử lý sự kiện (thêm/sửa/xoá)
6. Đăng xuất (xoá token)
7. Đổi thông tin user

API: [https://todoapi-fawn.vercel.app/](https://todoapi-fawn.vercel.app/)api

Đăng nhập: /auth/login (POST)

Đăng ký: /auth/signup (POST)

Đổi thông tin: /users/id (PUT) - token

Lấy danh sách: /todos (GET) - token

Tạo todo: /todos (POST) - token

Update: /todos/id (PUT) - token

DELETE: /todos/id (DELETE) - token
