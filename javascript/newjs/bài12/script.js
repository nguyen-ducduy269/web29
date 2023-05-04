//
// Object.entries - dùng để lặp ra tất cả phần tử bên trong Array

let cart = {
  1: {
    name: "a",
    ice: 30,
  },
  2: {
    name: "b",
    ice: 40,
  },
  3: {
    name: "c",
    ice: 50,
  },
};
for (let [k, v] of Object.entries(cart)) {
  console.log(k);
  console.log(v);
}
