function Add() {
  const inputName = document.querySelector(".name");
  const inputNamevalue = inputName.value;
  console.log(inputNamevalue);

  const optionValue = document.querySelectorAll(".form option");
  optionValue.forEach((option) => {
    console.log(option);
  });
}

export default Add;
