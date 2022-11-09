const CASES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const option = $("option");
let turn = $(option.val());
let winner;

const $board = $(".board-table");
const $turn = $(".turn");

$(function () {
  const input = $("bangcot");
  const $input = $("banghang");
  let ROW = $input.val();
  let CELL = input.val();
  renderBoard(ROW, CELL);
  batDau();
});

function switchTurn() {
  turn = turn === "X" ? "O" : "X";
  $turn.text(turn);
}

function checkWinner() {
  const $cell = $(".cell");

  for (let item of CASES) {
    const i = item[0];
    const j = item[1];
    const k = item[2];

    if (
      $cell[i].textContent !== "" &&
      $cell[i].textContent === $cell[j].textContent &&
      $cell[i].textContent === $cell[k].textContent
    ) {
      winner = turn;
      console.log("Winner", winner);
    }
  }
}

function handleCellClick(e) {
  if (!winner) {
    e.data.target.text(turn);
    checkWinner();
    switchTurn();
  }
}

function createCell() {
  const $cell = $("<div class='cell' />");
  $cell.one("click", { target: $cell }, handleCellClick);

  return $cell;
}

function createRow(numOfCells) {
  const $row = $("<div class='row' />");

  for (let i = 0; i < numOfCells; i++) {
    $row.append(createCell());
  }

  return $row;
}

function renderBoard(numOfRows, numOfCells) {
  for (let i = 0; i < numOfRows; i++) {
    $board.append(createRow(numOfCells));
  }
}

function batDau() {
  const $button = $("button");
  $button.on("click", function () {
    renderBoard();
  });
}
// nhập số cột số hàng thứ tự XO và nút start để bắt đầu
