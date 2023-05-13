import home_page from "./home_page.js";
import { handle_a, handle_b, c } from "./helper.js";

console.log("aaaaaa");
let hello = "hello";
home_page(hello);

handle_a();
handle_b();
home_page(c);

async function init_page() {
  await handle_a();
}
init_page();

let page = await import("./article.js");
console.log(page.article_page());

// lấy pathname - location.pathname
