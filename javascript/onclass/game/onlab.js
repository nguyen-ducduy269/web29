const chaRacTer1 = {
  name1: "char1",
  hp1: 20000,
  mp1: 345,
  atk1: 2100,
  def1: 800,

  weapon() {
    console.log("damage:70");
  },
  armor() {
    console.log("durability: 100");
  },
};
console.log(chaRacTer1.name1);
console.log(chaRacTer1.hp1);
console.log(chaRacTer1.mp1);
console.log(chaRacTer1.atk1);
console.log(chaRacTer1.def1);
chaRacTer1.weapon();
chaRacTer1.armor();

const chaRacTer2 = {
  name2: "char2",
  hp2: 135415,
  mp2: 645,
  atk2: 3800,
  def2: 600,

  weapon2() {
    console.log("damage: 90");
  },
  armor2() {
    console.log("durability:170");
  },
};
console.log(chaRacTer2.name2);
console.log(chaRacTer2.hp2);
console.log(chaRacTer2.mp2);
console.log(chaRacTer2.atk2);
console.log(chaRacTer2.def2);
chaRacTer2.weapon2();
chaRacTer2.armor2();

function battle(chaRacTer1, chaRacTer2) {
  let ontherhp = 0;
  for (i = chaRacTer1; i > chaRacTer2; i++) {
    if (def2 == 0) {
      return (ontherhp = atk1 - hp2);
    } else if (def2 > 0) {
      return (ontherhp = atk1 - def2);
    }
  }

  for (i = chaRacTer2; i > chaRacTer1; i++) {
    if (def1 == 0) {
      return (ontherhp = atk2 - hp1);
    } else if (def1 > 0) {
      return (ontherhp = atk2 - def1);
    }
  }
}
console.log(battle(20000, 135415));
