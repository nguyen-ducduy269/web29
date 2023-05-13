async function handle_a() {
  await console.log("a");
}

async function handle_b() {
  await console.log("b");
}

let c = {
  name: "Duy",
  age: 21,
};

export { handle_a, handle_b, c };
