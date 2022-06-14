const orangeSquare = document.getElementById("orange");
const blueSquare = document.getElementById("blue");
const yellowSquare = document.getElementById("yellow");
const redSquare = document.getElementById("red");
const greenSquare = document.getElementById("green");
const purpleSquare = document.getElementById("purple");
const pinkSquare = document.getElementById("pink");
const fruit = document.querySelector(".fruit");

function clickedSquare() {
  orangeSquare.addEventListener("click", () => {
    fruit.innerHTML =
      '<img src="./public/images/oranges.png" width="466" height="350" style="border: 17px solid orange; border-radius: 5%; box-shadow: 10px 10px rgba(255, 119, 0, 0.407);"/>';
  });
  blueSquare.addEventListener("click", () => {
    fruit.innerHTML = '<img src="./public/images/blueberries.png" width="466" height="350" style="border: 17px solid blue; border-radius: 5%; box-shadow: 10px 10px rgba(33, 114, 255, 0.407);"/>';
  });
  yellowSquare.addEventListener("click", () => {
    fruit.innerHTML = '<img src="./public/images/bananas.png" width="466" height="350" style="border: 17px solid yellow; border-radius: 5%; box-shadow: 10px 10px rgba(255, 238, 7, 0.407);"/>';
  });
  redSquare.addEventListener("click", () => {
    fruit.innerHTML = '<img src="./public/images/red-apples.png" width="466" height="350" style="border: 17px solid red; border-radius: 5%; box-shadow: 10px 10px rgba(255, 65, 65, 0.407);"/>';
  });
  greenSquare.addEventListener("click", () => {
    fruit.innerHTML = '<img src="./public/images/grapes.png" width="466" height="350" style="border: 17px solid green; border-radius: 5%; box-shadow: 10px 10px rgba(108, 255, 85, 0.407);"/>';
  });
  purpleSquare.addEventListener("click", () => {
    fruit.innerHTML = '<img src="./public/images/plums.png" width="466" height="350" style="border: 17px solid purple; border-radius: 5%; box-shadow: 10px 10px rgba(105, 1, 98, 0.407);"/>';
  });
  pinkSquare.addEventListener("click", () => {
    fruit.innerHTML = '<img src="./public/images/grape-fruit.png" width="466" height="350" style="border: 17px solid pink; border-radius: 5%; box-shadow: 10px 10px rgba(255, 70, 199, 0.407);"/>';
  });
}

clickedSquare();
