// Hamburger Menu  ===============
function menuOnClick() {
  document.getElementById("menuH-barH").classList.toggle("changeH");
  document.getElementById("navH").classList.toggle("changeH");
  document.getElementById("menuH-bgH").classList.toggle("changeH-bgH");
}

// Control Panel section  =============== 
let conDiv = document.querySelector(".control_div");
function openCloseDiv() {
  if (conDiv.style.display === "block") {
    conDiv.style.display = "none";
  } else {
    conDiv.style.display = "block";
  }
}

function changeHeight() {
  conDiv.classList.toggle("control_div1");
}

function changeWidth() {
  conDiv.classList.toggle("control_div2");
}

function moveToCenter() {
  conDiv.classList.toggle("control_div3");
}

function changePosition() {
  conDiv.classList.toggle("control_div4");
}

// Color section ===============
function rand() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  return "rgb(" + rand() + "," + rand() + "," + rand() + ")";
}

let squares = document.querySelectorAll(".color_square");

function recolor() {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = randomColor();
  }
}

function addColorName() {
    for (i = 0; i < squares.length; i++) {
      squares[i].innerHTML = randomColor();
    }
  }

// Data section  ===============
function addTable() {
  let tbody = document.getElementById("tbody");
  let tbodyRow = tbody.insertRow();
  let cell1 = tbodyRow.insertCell(0);
  let cell2 = tbodyRow.insertCell(1);
  let cell3 = tbodyRow.insertCell(2);
  let cell4 = tbodyRow.insertCell(3);

  cell1.innerHTML = addRowNum();

  let firstName = document.querySelector("#firstName").value;
  cell2.innerText = firstName;

  let lastName = document.querySelector("#lastName").value;
  cell3.innerText = lastName;

  let ageCount = document.querySelector("#countAge").value;
  let output = new Date().getFullYear() - Number.parseInt(ageCount);
  cell4.innerText = output;
}

let j = 0;
function addRowNum() {
  addTable.value = j++;
  return j;
}

function resetRowNum() {
  j = 0;
}

$("#emptyForm").click(function() {
  $("#firstName").val("");
  $("#lastName").val("");
  $("#countAge").val("");
});

$("#resetButton").click(function() {
  $("#tbody").empty();
});
