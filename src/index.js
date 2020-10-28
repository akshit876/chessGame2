import "./styles.css";

/**
 * on play click pawn should start moving after each second
 * Stop will freeze the movement of the pawn
 *
 * On cell click pawn should move to respective cell
 *
 */
let timer = 0;
const playbtn = document.querySelector("#play");
const stopbtn = document.querySelector("#stop");
const grid = document.querySelector(".grid-container");

const pawn_attacher = () => {
  let a1 = document.querySelector(".pawn");
  if (a1 === null) return;
  console.log(a1);
  a1.setAttribute("class", "cell");
  if (a1.nextElementSibling === null) {
    playbtn.removeEventListener("click", function () {
      timer = setInterval(pawn_attacher, 1000);
    });
    console.log("game over");
    clearInterval(timer);
    return;
  }
  a1.nextElementSibling.setAttribute("class", "cell pawn");
};

playbtn.addEventListener("click", function () {
  timer = setInterval(pawn_attacher, 1000);
});

stopbtn.addEventListener("click", function () {
  clearInterval(timer);
});

grid.addEventListener("click", function (e) {
  clearInterval(timer);
  let tar = e.target;
  let prev = document.querySelector(".pawn");
  prev.setAttribute("class", "cell");
  tar.setAttribute("class", "cell pawn");
  timer = setInterval(pawn_attacher, 1000);
});
