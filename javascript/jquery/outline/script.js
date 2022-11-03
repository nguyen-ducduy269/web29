$(document).ready(function () {
  var countx = 0;
  var county = 0;
  var start = false;
  var terminate = false;
  var flag = 0;
  var count = true;
  var b = [];
  var button = document.getElementsByClassName("column");
  var x = document.getElementById("result");
  var stack = [];
  var xoro = [];
  var top = -1;

  for (var i = 0; i < 9; i++) {
    b[i] = false;
  }

  if (top === -1) {
    $("#undo").addClass("sleep");
  }

  $(".button").hover(function () {
    $(this).toggleClass("highlight");
  });
  $("#go").click(function () {
    if ($("#input1").val() === "" || $("#input2").val() === "")
      alert("Please Enter Player Names..!!");
    else {
      start = true;
    }
  });

  $("#undo").click(function () {
    if (top > -1 && !terminate) {
      var a = stack[top];
      b[a] = false;
      if (xoro[top] === "X") {
        countx = countx - 1;
        count = true;
      } else {
        county = county - 1;
        count = false;
      }
      var y = "#b" + (a + 1);
      $(y).text("");
      top--;
      if (top === -1) {
        $("#undo").addClass("sleep");
      }
    }
  });

  $("#reset").click(function () {
    countx = 0;
    county = 0;
    for (var i = 0; i < 9; i++) {
      b[i] = false;
    }
    start = false;
    flag = 0;
    count = true;
    for (i = 0; i < button.length; i++) {
      button[i].innerHTML = "";
    }
    $("#input1").val("");
    $("#input2").val("");
    x.innerHTML = "";
    top = -1;
    terminate = false;
    $("#undo").addClass("sleep");
  });

  $("#b1").click(function () {
    if (!start) {
      alert("Enter Names And Click Go..!!!");
    } else if (!b[0]) {
      b[0] = true;
      if (top === -1) {
        $("#undo").removeClass("sleep");
      }
      top = top + 1;
      if (count) {
        $(this).text("X");
        $(this).hide();
        $(this).fadeIn(500);
        count = false;
        countx++;
        if (countx >= 3) {
          if (!validate(0, "X")) checkDraw();
        }
        xoro[top] = "X";
      } else {
        $(this).text("O");
        $(this).hide();
        $(this).fadeIn(1000);
        count = true;
        county++;
        if (county >= 3) {
          if (!validate(0, "O")) checkDraw();
        }
        xoro[top] = "O";
      }

      stack[top] = 0;
    }
  });

  button[1].onclick = function () {
    if (!start) {
      alert("Enter Names And Click Go..!!!");
    } else if (!b[1]) {
      b[1] = true;
      if (top === -1) {
        $("#undo").removeClass("sleep");
      }
      top = top + 1;
      if (count) {
        $(this).text("X");
        $(this).hide();
        $(this).fadeIn(1000);
        count = false;
        countx++;
        if (countx >= 3) {
          if (!validate(1, "X")) checkDraw();
        }
        xoro[top] = "X";
      } else {
        $(this).text("O");
        $(this).hide();
        $(this).fadeIn(1000);
        count = true;
        county++;
        if (county >= 3) {
          if (!validate(1, "O")) checkDraw();
        }
        xoro[top] = "O";
      }

      stack[top] = 1;
    }
  };

  button[2].onclick = function () {
    if (!start) {
      alert("Enter Names And Click Go..!!!");
    } else if (!b[2]) {
      b[2] = true;
      if (top === -1) {
        $("#undo").removeClass("sleep");
      }
      top = top + 1;
      if (count) {
        $(this).text("X");
        $(this).hide();
        $(this).fadeIn(1000);
        count = false;
        countx++;
        if (countx >= 3) {
          if (!validate(2, "X")) checkDraw();
        }
        xoro[top] = "X";
      } else {
        $(this).text("O");
        $(this).hide();
        $(this).fadeIn(1000);
        count = true;
        county++;
        if (county >= 3) {
          if (!validate(2, "O")) checkDraw();
        }
        xoro[top] = "O";
      }

      stack[top] = 2;
    }
  };

  button[3].onclick = function () {
    if (!start) {
      alert("Enter Names And Click Go..!!!");
    } else if (!b[3]) {
      b[3] = true;
      if (top === -1) {
        $("#undo").removeClass("sleep");
      }
      top = top + 1;
      if (count) {
        $(this).text("X");
        $(this).hide();
        $(this).fadeIn(1000);
        count = false;
        countx++;
        if (countx >= 3) {
          if (!validate(3, "X")) checkDraw();
        }
        xoro[top] = "X";
      } else {
        $(this).text("O");
        $(this).hide();
        $(this).fadeIn(1000);
        count = true;
        county++;
        if (county >= 3) {
          if (!validate(3, "O")) checkDraw();
        }
        xoro[top] = "O";
      }
      stack[top] = 3;
    }
  };

  button[4].onclick = function () {
    if (!start) {
      alert("Enter Names And Click Go..!!!");
    } else if (!b[4]) {
      b[4] = true;
      if (top === -1) {
        $("#undo").removeClass("sleep");
      }
      top = top + 1;
      if (count) {
        $(this).text("X");
        $(this).hide();
        $(this).fadeIn(1000);
        count = false;
        countx++;
        if (countx >= 3) {
          if (!validate(4, "X")) checkDraw();
        }
        xoro[top] = "X";
      } else {
        $(this).text("O");
        $(this).hide();
        $(this).fadeIn(1000);
        count = true;
        county++;
        if (county >= 3) {
          if (!validate(4, "O")) checkDraw();
        }
        xoro[top] = "O";
      }
      stack[top] = 4;
    }
  };

  button[5].onclick = function () {
    if (!start) {
      alert("Enter Names And Click Go..!!!");
    } else if (!b[5]) {
      b[5] = true;
      if (top === -1) {
        $("#undo").removeClass("sleep");
      }
      top = top + 1;
      if (count) {
        $(this).text("X");
        $(this).hide();
        $(this).fadeIn(1000);
        count = false;
        countx++;
        if (countx >= 3) {
          if (!validate(5, "X")) checkDraw();
        }
        xoro[top] = "X";
      } else {
        $(this).text("O");
        $(this).hide();
        $(this).fadeIn(1000);
        count = true;
        county++;
        if (county >= 3) {
          if (!validate(5, "O")) checkDraw();
        }
        xoro[top] = "O";
      }
      stack[top] = 5;
    }
  };

  button[6].onclick = function () {
    if (!start) {
      alert("Enter Names And Click Go..!!!");
    } else if (!b[6]) {
      b[6] = true;
      if (top === -1) {
        $("#undo").removeClass("sleep");
      }
      top = top + 1;
      if (count) {
        $(this).text("X");
        $(this).hide();
        $(this).fadeIn(1000);
        count = false;
        countx++;
        if (countx >= 3) {
          if (!validate(6, "X")) checkDraw();
        }
        xoro[top] = "X";
      } else {
        $(this).text("O");
        $(this).hide();
        $(this).fadeIn(1000);
        count = true;
        county++;
        if (county >= 3) {
          if (!validate(6, "O")) checkDraw();
        }
        xoro[top] = "O";
      }
      stack[top] = 6;
    }
  };

  button[7].onclick = function () {
    if (!start) {
      alert("Enter Names And Click Go..!!!");
    } else if (!b[7]) {
      b[7] = true;
      if (top === -1) {
        $("#undo").removeClass("sleep");
      }
      top = top + 1;
      if (count) {
        $(this).text("X");
        $(this).hide();
        $(this).fadeIn(1000);
        count = false;
        countx++;
        if (countx >= 3) {
          if (!validate(7, "X")) checkDraw();
        }
        xoro[top] == "X";
      } else {
        $(this).text("O");
        $(this).hide();
        $(this).fadeIn(1000);
        count = true;
        county++;
        if (county >= 3) {
          if (!validate(7, "O")) checkDraw();
        }
        xoro[top] = "O";
      }
      stack[top] = 7;
    }
  };

  button[8].onclick = function () {
    if (!start) {
      alert("Enter Names And Click Go..!!!");
    } else if (!b[8]) {
      b[8] = true;
      if (top === -1) {
        $("#undo").removeClass("sleep");
      }
      top = top + 1;
      if (count) {
        $(this).text("X");
        $(this).hide();
        $(this).fadeIn(1000);
        count = false;
        countx++;
        if (countx >= 3) {
          if (!validate(8, "X")) checkDraw();
        }
        xoro[top] == "X";
      } else {
        $(this).text("O");
        $(this).hide();
        $(this).fadeIn(1000);
        count = true;
        county++;
        if (county >= 3) {
          if (!validate(8, "O")) checkDraw();
        }
        xoro[top] = "O";
      }
      stack[top] = 8;
    }
  };

  var validate = function (position, ch) {
    if (position === 0) {
      if (button[position + 1].innerHTML === ch) {
        if (button[position + 2].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 1, position + 2);
        }
      }
      if (button[position + 3].innerHTML === ch) {
        if (button[position + 6].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 3, position + 6);
        }
      }
      if (button[position + 4].innerHTML === ch) {
        if (button[position + 8].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 4, position + 8);
        }
      }
    } else if (position === 6) {
      if (button[position + 1].innerHTML === ch) {
        if (button[position + 2].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 1, position + 2);
        }
      }
      if (button[position - 3].innerHTML === ch) {
        if (button[position - 6].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 3, position - 6);
        }
      }
      if (button[position - 2].innerHTML === ch) {
        if (button[position - 4].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 2, position - 4);
        }
      }
    } else if (position === 2) {
      if (button[position - 1].innerHTML === ch) {
        if (button[position - 2].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 1, position - 2);
        }
      }
      if (button[position + 3].innerHTML === ch) {
        if (button[position + 6].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 3, position + 6);
        }
      }
      if (button[position + 2].innerHTML === ch) {
        if (button[position + 4].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 2, position + 4);
        }
      }
    } else if (position === 8) {
      if (button[position - 3].innerHTML === ch) {
        if (button[position - 6].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 3, position - 6);
        }
      }
      if (button[position - 1].innerHTML === ch) {
        if (button[position - 2].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 2, position - 1);
        }
      }
      if (button[position - 4].innerHTML === ch) {
        if (button[position - 8].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 4, position - 8);
        }
      }
    } else if (position === 1) {
      if (button[position + 3].innerHTML === ch) {
        if (button[position + 6].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 3, position + 6);
        }
      }
      if (button[position - 1].innerHTML === ch) {
        if (button[position + 1].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 1, position + 1);
        }
      }
    } else if (position === 7) {
      if (button[position - 3].innerHTML === ch) {
        if (button[position - 6].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 3, position - 6);
        }
      }
      if (button[position - 1].innerHTML === ch) {
        if (button[position + 1].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 1, position - 1);
        }
      }
    } else if (position === 3) {
      if (button[position + 1].innerHTML === ch) {
        if (button[position + 2].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 1, position + 2);
        }
      }
      if (button[position - 3].innerHTML === ch) {
        if (button[position + 3].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 3, position + 3);
        }
      }
    } else if (position === 5) {
      if (button[position - 1].innerHTML === ch) {
        if (button[position - 2].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 1, position - 2);
        }
      }
      if (button[position - 3].innerHTML === ch) {
        if (button[position + 3].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 3, position + 3);
        }
      }
    } else if (position === 4) {
      if (button[position + 1].innerHTML === ch) {
        if (button[position - 1].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 1, position - 1);
        }
      }
      if (button[position - 3].innerHTML === ch) {
        if (button[position + 3].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position - 3, position + 3);
        }
      }
      if (button[position + 2].innerHTML === ch) {
        if (button[position - 2].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 2, position - 2);
        }
      }
      if (button[position - 4].innerHTML === ch) {
        if (button[position + 4].innerHTML === ch) {
          flag = 1;
          stop(ch, position, position + 4, position - 4);
        }
      }
    }
    if (flag === 1) return true;
    else return false;
  };

  var stop = function (ch, p1, p2, p3) {
    if (ch === "X") {
      ch = $("#input1").val();
    } else {
      ch = $("#input2").val();
    }

    for (var i = 0; i < 9; i++) {
      b[i] = true;
    }

    var rslt = ch + " WINS.....!!!";
    var y = "#b" + (p1 + 1);
    var z = "#b" + (p2 + 1);
    var w = "#b" + (p3 + 1);
    console.log(y);
    setTimeout(function () {
      $(y).addClass("effect");
    }, 1000);
    setTimeout(function () {
      $(z).addClass("effect");
    }, 1000);
    setTimeout(function () {
      $(w).addClass("effect");
    }, 1000);

    //while(start);

    setTimeout(function () {
      $(y).removeClass("effect");
    }, 5000);
    setTimeout(function () {
      $(z).removeClass("effect");
    }, 5000);
    setTimeout(function () {
      $(w).removeClass("effect");
    }, 5000);

    setTimeout(function () {
      $(x).text(rslt);
    }, 1000);
    //x.innerHTML=ch+" WINS.....!!!";
    terminate = true;
    $("#undo").addClass("sleep");
  };

  var checkDraw = function () {
    var verify = 0;
    for (var i = 0; i < 9; i++) {
      if (!b[i]) {
        verify = 1;
      }
    }
    if (verify != 1) {
      x.innerHTML = "Draw.....!!";
      terminate = true;
      $("#undo").addClass("sleep");
    }
  };
});
