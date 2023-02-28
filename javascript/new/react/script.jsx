const app = document.querySelector("#app");
// const card = document.createElement("div");
// card.classList.add("card");
// const cardThumb = document.createElement("img");
// cardThumb.src = "https://media.techmaster.vn/api/static/53/HXYeoBju";
// cardThumb.alt = "Một số trang web cho phép tạo ảnh bằng cách gõ text";
// const title = document.createElement("h3");
// title.classList.add("card-title");
// title.textContent = "Một số trang web cho phép tạo ảnh bằng cách gõ text";

// const cardText = document.createElement("p");
// cardText.classList.add("card-text");
// cardText.textContent =
//   "Dưới đây mình sẽ giới thiệu 1 số website mà có cho phép người dùng sử dụng ...";

// const cardView = document.createElement("div");
// cardView.classList.add("card-view");
// cardView.textContent = "👁️ 38";

// const cardPublic = document.createElement("time");
// cardPublic.classList.add("card-public");
// cardPublic.textContent = "28-02-2023";

// const cardMeta = document.createElement("div");
// cardMeta.classList.add("card-meta");
// cardMeta.append(cardView, cardPublic);

// const cardBody = document.createElement("div");
// cardBody.classList.add("card-body");
// cardBody.append(title, cardText);

// card.append(cardThumb, cardBody, cardMeta);
// app.append(card);

//thu vien khai bao
// const card = (
//   <div class="card">
//     <img
//       class=" card-thumb"
//       src="https://media.techmaster.vn/api/static/53/HXYeoBju"
//       alt="Một số trang web cho phép tạo ảnh bằng cách gõ text"
//     />

//     <div class="card-body">
//       <h3 class="card-title">
//         Một số trang web cho phép tạo ảnh bằng cách gõ text
//       </h3>

//       <p class="card-text">
//         Dưới đây mình sẽ giới thiệu 1 số website mà có cho phép người dùng sử
//         dụng ...
//       </p>
//     </div>

//     <div class="card-meta">
//       <div class="card-view">👁️ 38</div>
//       <div class="card-public">28-02-2023</div>
//     </div>
//   </div>
// );
// ReactDOM.createRoot(app).render(card);

// đổi : class => className, for => forHTMl (label)\
// thuộc tinsph sự kiện => camelCase, ví dụ onClick, onMouseOver
const alt = "Một số trang web cho phép tạo ảnh bằng cách gõ text";
const text =
  "Dưới đây mình sẽ giới thiệu 1 số website mà có cho phép người dùng sử dụng ...";
const view = 38;
const card = () => (
  <div className="card" onClick={() => console.log("LOL!")}>
    <img
      className="card-thumb"
      src="https://media.techmaster.vn/api/static/53/HXYeoBju"
      alt={alt}
    />

    <div className="card-body">
      <h3 className="card-title">
        Một số trang web cho phép tạo ảnh bằng cách gõ text
      </h3>
      <p className="card-text">{text}</p>
      {text && <p className="card-text">{text}</p>}
    </div>

    <div className="card-meta">
      <div className="card-view">
        👁️
        {view < 10
          ? "Quá ít lượt xem"
          : view < 100
          ? "Khá nhiều lượt xem"
          : "Rất nhiều lượt xem"}
      </div>
      <div className="card-public">28-02-2023</div>
    </div>
  </div>
);

ReactDOM.createRoot(app).render([card(), card(), card(), card()]);

// những giá trị đặc biệt ko hiển thị lên html
// {false}
// {undefined}
// {null}
// {[]}
