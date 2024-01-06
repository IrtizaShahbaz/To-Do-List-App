const inpBox = document.getElementById("inp-box");
const listCon = document.getElementById("list-box");

function addTask() {
  if (inpBox.value === "") {
    alert("You Must Need to Write Something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inpBox.value;
    listCon.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inpBox.value = "";
  saveData();
}

listCon.addEventListener("click", function (aim) {
  if (aim.target.tagName === "LI") {
    aim.target.classList.toggle("checked");
    saveData();
  } else if (aim.target.tagName === "SPAN") {
    aim.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listCon.innerHTML);
}
function showData() {
  listCon.innerHTML = localStorage.getItem("data");
}
showData();