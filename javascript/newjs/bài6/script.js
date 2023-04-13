/**
 * .arlert(messager) - cảnh báo - sinh ra mặc định theo style của trình duyệt
 * .confirm() - trả về 2 giá trị true(khi ấn ok) và false(khi ấn hủy)
 * messager - câu thông báo truyền vào trong arlert và confirm
 * thực tế custom 1 cái toast
 *
 *
 * kỹ thuật cloning object in javascript
 * shalow copy - có thể ảnh hưởng tới object, array đã sao chép - nên chỉ dùng với 1 object, array có cấu trúc đơn giản
 * let a = [...b] - rest parameter - clone lại 1 object
 * .concat()
 *
 *
 * deep copy KHONG CẦN DÙNG NÃO
 * JSON.stringify - kéo phẳng hết ra thành 1 string
 * JSON.parse(JSON.stringify(obj))
 */
const main = document.querySelector("main");
const button = main.querySelector("button");
button.addEventListener("click", () => {
  let valueConfirm = confirm("Trời mưa mà vẫn phải đi học");
  console.log("valueConfirm", valueConfirm);

  if (valueConfirm == true) {
    let newContent = { content: "Nội dung đã được thay đổi mới" };
    main.querySelector("p").innerText = newContent;
    // lưu vào localStorage - luôn lưu theo dạng string(bắt buộc)
    // localStorage.setItem(tên của cái localStorage đó, cái mình cần lưu)
    localStorage.setItem("newValue", JSON.stringify(newContent));
    // lấy ra từ localStorage
    // localStorage.getItem(tên cái localStorage cần lấy)
    if (localStorage.setItem("newValue", JSON.stringify(newContent))) {
      main.querySelector("p").innerHTML = localStorage.getItem("newValue");
    }

    // xóa localStorage
    // localStorage.removeItem(tên của cái localStorage mình cần xóa)
  }
});

let a = [1, 2, 3, 4, 5, 6];
let b = [...a];
console.log("b", b);

let c = {
  name: "Duy",
  title: "aaaaaaaa",
  discription: {
    paragraph: "content1",
    name: "book1",
  },
};

let d = { ...c, discription: { paragraph: "content2", name: "book2" } };
console.log("c", c);
console.log("d", d);
console.log(d.discription.name);

let e = JSON.parse(JSON.stringify(c));
console.log("e", e);
e.name = "djaosdjoaisjdoaisjdiasd";
console.log("c", c);
console.log("e", e);
