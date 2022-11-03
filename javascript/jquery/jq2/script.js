function toogleEditable(){
    const $edit = e.data.find(".btn-edit");
    $edit.toogleClass("editting")
}
function addNewNode() {
  const note = $(`<div class="note">
      <div class="note-header">
        <button class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="note-content">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>`);
  return note;
}

$(function () {
  const btnAdd = $(".btn-add");
  btnAdd.on("click", function () {
    const $note = addNewNode();
    $(".main").append($note);
  });
});
