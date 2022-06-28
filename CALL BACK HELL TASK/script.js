let container = document.getElementById("container");
let newPara = document.createElement("p");
newPara.setAttribute("class", "count");
let count = 10;
function f1(cf) {
  cf();
}

function content() {
  if (count <= 10 && count >= 0) {
    if (count === 0) {
      setTimeout(() => {
        newPara.innerText = "Happy Independance day !!!";
        container.appendChild(newPara);
      }, 1000);
    } else {
      setTimeout(() => {
        newPara.innerText = count;
        container.appendChild(newPara);
        count--;
        f1(content);
      }, 1000);
    }
  }
}

f1(content);
