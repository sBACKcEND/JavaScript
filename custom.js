function hamburger() {
  let x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function openCloseDiv() {
  let x = document.getElementById("controlDiv");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function changeHeight() {
  let x = document.getElementById("controlDiv");
  x.style.height = "150px";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function changeWidth() {
  let x = document.getElementById("controlDiv");
  x.style.width = "150px";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function moveToCenter() {
  let x = document.getElementById("controlDiv");
  x.style.margin = "0 auto";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function changePosition() {
  let x = document.getElementById("controlDiv");
  x.style.position = "absolute";
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// function recolor(event) {
//   event.target.style.backgroundColor = randomColor();
// }
// function randomColor() {
//   return "rgb(" + rand() + "," + rand() + "," + rand() + ")";
// }
// function rand() {
//   return Math.floor(Math.random() * 256);
// }

let colors = [
    "#FFE4C4",
    "#000000",
    "#FFEBCD",
    "#0000FF",
    "#8A2BE2",
    "#A52A2A",
    "#DEB887",
    "#5F9EA0",
    "#7FFF00",
    "#D2691E",
    "#6495ED",
    "#FFF8DC",
    "#DC143C",
    "#00FFFF",
    "#00008B",
    "#008B8B",
    "#B8860B",
    "#A9A9A9",  
];
let boxes = document.querySelectorAll(".square");
function recolor(event) {
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  }
}

function display() {
  document.getElementById("displayarea").innerHTML = +1;
  document.getElementById("displayarea1").innerHTML =
    document.getElementById("fname").value;
  document.getElementById("fname").value = "";
  document.getElementById("displayarea2").innerHTML =
    document.getElementById("lname").value;
  document.getElementById("lname").value = "";
  document.getElementById("displayarea3").innerHTML =
    document.getElementById("year").value;
  document.getElementById("year").value = "";
}

// function resetTable() {
//     document.getElementById("newTable").reset(td);
//  }

 function resetTable() {
	let Table = document.getElementById("newTable");
	Table.innerHTML = "";
}