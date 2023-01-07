let color = "black";
let board = document.querySelector(".board");
let isPointerDown = true;

function populateBoard(size) {
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for(let i = 0; i<amount; i++) {
    let square = document.createElement("div");
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if(input >= 2 || input <= 100) {
    populateBoard(input);  
  }
  else {
    console.log("Only values between and including 2 and 100 are accepted.");
  }
  

}

function colorSquare() {
  if(isPointerDown) {
    if (color === 'rainbow') {
      let letters = '0123456789ABCDEF';
      let rainbow = '#';
      for (let i = 0; i < 6; i++) {
        rainbow += letters[Math.floor(Math.random() * 16)];
      }
      this.style.backgroundColor = rainbow;
    } else {
      this.style.backgroundColor = color; 
    }  
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
    let board = document.querySelector("div");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

