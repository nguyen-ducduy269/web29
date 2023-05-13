import render_header from "./components/page_header.js";
import home_page from "./pages/home_pages.js";

let main_template = document.getElementById("main");
main_template.appendChild(render_header());
main_template.appendChild(home_page());
