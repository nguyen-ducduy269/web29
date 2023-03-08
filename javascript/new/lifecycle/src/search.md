1. Giống và khác nhau giữa useRef và useState

- Điểm giống:
  Cả `useRef` và `useState` đều có thể được sử dụng để lưu trữ giá trị của một biến hoặc một element trên trang.

  Chỉ cần nếu giá trị của state thay đổi hoặc giá trị của biến được cập nhật bằng `useRef`, React sẽ render lại component đó.

- Khác nhau:
  `useState` được sử dụng để lưu trữ và quản lý các giá trị state bên trong một functional component. Khi giá trị của state thay đổi, React sẽ tự động render lại component đó.

  `useRef` được sử dụng để lưu trữ các giá trị khác mà không thay đổi giá trị state của component. Khi giá trị được cập nhật, React sẽ không tự động render lại component, mà bạn cần phải gọi phương thức `.current` để truy xuất giá trị mới.

  Có thể sử dụng `useState` để lưu trữ một giá trị đếm số lần click trên một button và sau đó hiển thị giá trị đó trong component. Trong khi đó, bạn có thể sử dụng `useRef` để lưu trữ một element DOM và đọc hoặc sửa đổi thuộc tính của nó.

2. Event trong React Hook

   Trong React Hook, các event như `onClick`, `onBlur`, `onChange`, ... có thể được phân tích thành các phần tử bao gồm `event callback function`, `event object` và `dependencies list` của hàm Hook.

   Các phần tử này tương ứng với tham số trong hàm Hook như sau:

   - `event callback function`: Đây là function được gọi khi event được kích hoạt. Function này thường sẽ có tham số là `event object`.

   - `event object`: Đây là một object chứa thông tin về event - ví dụ như giá trị của element, thứ tự tab, phím được nhấn,... Các thông tin này có thể được sử dụng để sửa đổi hoạt động của các component.

   - `dependencies list`: Danh sách các biến dependencies của hàm Hook, sẽ được sử dụng để quản lý lifecycle và đồng bộ hóa component.

   Ví dụ, trong `useState` hook, dependencies list có chứa states cần được cập nhật, và hook sẽ được gọi lại mỗi khi state thay đổi. Tương tự trong `useEffect` hook, danh sách dependencies của hook sẽ chứa các biến mà khi thay đổi sẽ ảnh hưởng đến component.

   Với React Hook, thay vì sử dụng các hàm lifecyle như `componentWillMount`, `componentDidMount`, ..., các event như `onClick`, `onChange` sẽ được sử dụng để cập nhật giá trị trạng thái của component. Các giá trị này có thể được lưu trữ trong `state` hoặc `ref`.

   ```
   import React, { useState } from 'react';

   function MyButton() {
   const [count, setCount] = useState(0);
   const handleClick = () => {
   setCount(count + 1);
   }

   return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={handleClick}>Click me!</button>
    </div>
    );
    }
   ```

3. Cách để hủy request khi render

- Sử dụng Axios Cancel Token:

  Axios là một thư viện JS được sử dụng cho việc xử lý request HTTP. Nó cung cấp cho chúng ta một tính năng Cancel Token cho phép chúng ta hủy request khi cần thiết. Để sử dụng chức năng này, chúng ta cần tạo một cancel token và truyền nó vào request. Sau đó, khi muốn hủy request, chúng ta sử dụng phương thức cancel trên cancel token.\
   Ví dụ:

  ```
    import axios from 'axios';
    import { useEffect } from 'react';

    function MyComponent() {
        useEffect(() => {
            const source = axios.CancelToken.source();
            const fetchData = async () => {
                try {
                    const response = await axios.get('https://api.example.com/data', {
                    cancelToken: source.token,
                });
                console.log(response.data);
                } catch (err) {
                if (axios.isCancel(err)) {
                     console.log('Request cancelled', err.message);
                } else {
                    console.log(err.message);
                }
            }
        };
    fetchData();
    return () => {
        source.cancel('Component unmounted');
    };
    }, []);
    return (
        <div>
            {/_ Component content _/}
        </div>
    );
    }
  ```

- Sử dụng AbortController:

  AbortController là một tính năng mới được hỗ trợ bởi trình duyệt, cho phép chúng ta hủy các tác vụ như một request XHR hoặc một kết nối Fetch. Chúng ta có thể sử dụng AbortController để hủy request như sau:

  ```
    import { useEffect, useState } from 'react';


    function MyComponent() {
        const [data, setData] = useState(null);

        useEffect(() => {
            const controller = new AbortController();
            const signal = controller.signal;
            const fetchData = async () => {
                try {
                    const response = await fetch('https://api.example.com/data', { signal });
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Request cancelled', err.message);
                } else {
                    console.log(err.message);
                }
            }
        };
    fetchData();
    return () => {
            controller.abort();
        };
    }, []);
    return (
        <div>
            {/_ Component content _/}
            {data && <p>{JSON.stringify(data)}</p>}
        </div>
        );
    }
  ```

3. Custom Hook

   - Custom Hook là một khái niệm mới trong React cho phép chúng ta tạo ra các hàm Hook riêng để tái sử dụng logic tại nhiều component khác nhau, giúp đơn giản hóa code và giảm tối đa sự lặp lại.

   - Một custom Hook là một hàm JavaScript bình thường bắt đầu bằng từ khóa `use`, và nó có thể sử dụng bất kỳ hàm Hook nào khác, bao gồm các custom Hook khác. Custom Hook cho phép chúng ta trừu tượng hóa logic, đồng thời loại bỏ nhiễu về mặt cú pháp liên quan đến việc sử dụng các hàm Hook.

   - Ví dụ:

   ```
    import { useState, useEffect } from 'react';

    function useClickCounter() {
        const [count, setCount] = useState(0);

        useEffect(() => {
            document.addEventListener('click', () => {
                setCount(count + 1);
            });
        return () => {
            document.removeEventListener('click', () => {
                setCount(count + 1);
            });
        };
    }, [count]);

    return count;
    }
   ```

   - Ngay bây giờ, chúng ta có thể sử dụng Hook này trong bất kỳ component nào như sau:

   ```
    import { useClickCounter } from './useClickCounter';

    function ClickCounter() {
    const count = useClickCounter();

    return (
        <div>
            <p>You clicked the mouse {count} times</p>
        </div>
        );
    }
   ```
