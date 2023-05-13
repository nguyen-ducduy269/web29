let links = [
  {
    url: "#",
    name: "Trang chủ",
  },
  {
    url: "#",
    name: "Thực đơn",
  },
];

function render_header() {
  const header = document.createElement("header");
  header.innerHTML = `
      <div class="container">
        <h1></h1>
        <nav></nav>
        <span>
          <i class="fas fa-phone-alt"></i>
          <a>090 123 4567</a>
        </span>
      </div>
    `;

  const nav = header.querySelector("nav");
  links.map((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.innerHTML = link.name;
    nav.appendChild(a);
  });

  const h1 = header.querySelector("h1");
  h1.innerHTML = "Xôi quán";
  return header;
}

export default render_header;
