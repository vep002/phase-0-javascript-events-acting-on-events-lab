// Your code here
const dodger= document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4"
dodger.style.bottom = "100px"
dodger.style.left = "100px"

//document.addEventListener('keydown', function(event){
//    console.log(event)
//})
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 400) {
      dodger.style.left = `${left + 1}px`;
    }
  }
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
    moveDodgerLeft()}
    else if (event.key ==="ArrowRight") {
        moveDodgerRight()
    }
  });
 