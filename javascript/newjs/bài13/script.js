const inputSelf = document.querySelector(".selfie input");

inputSelf.addEventListener("change", () => {
  let file = inputSelf.files[0];
  let reader = new FileReader();
  reader.addEventListener("load", () => {
    const imgSelf = document.querySelector(".selfie");
    imgSelf.style.backgroundImage = `url(${reader.result})`;
  });
  if (file) reader.readAsDataURL(file);
});
