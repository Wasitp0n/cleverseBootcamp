const textIn = document.getElementById("task");
const textButton = document.getElementById("taskInput");
const list = document.getElementById("listOfTask");

textButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!textIn.value) {
    alert("Hey, Mate! Please fill your task!");
  } else {
    const newList = document.createElement("li");
    newList.textContent = textIn.value;
    list.appendChild(newList);

    newList.addEventListener("click", function () {
      const li = document.querySelectorAll("li");
      console.log(li);
      for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function () {
          li[i].classList.toggle("done");
        });
      }
    });
  }
  textIn.value = "";
});


