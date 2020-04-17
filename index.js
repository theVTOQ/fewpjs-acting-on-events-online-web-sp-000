// Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");
function moveDodgerLeft() {
  let left = parseInt(dodger.style.left.replace("px", ""), 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function(e){
  if (e.key === "ArrowLeft"){
    moveDodgerLeft();
  }
});
