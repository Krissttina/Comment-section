//input
const text = document.getElementById("bodyText");
const body = document.getElementById("body");

//Comment Button
document.getElementById("commentBtn").addEventListener("click", () => {
  //check if field is empty
  if (text.value == "") {
    return;
  }

  body.style.display = "block";

  const div = document.createElement("div");
  div.className = "comment";

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  const p = document.createElement("p");
  p.textContent = text.value;

  text.value = "";

  body.appendChild(div);
  div.appendChild(p);
  div.appendChild(delBtn);

  //Delete Button
  delBtn.addEventListener("click", () => {
    div.remove();

    //if there are other elements left is otherwise hide the section
    if (body.innerHTML.trim() == "") {
      body.style.display = "none";
    }
  });
});

//Cancel Button
document.getElementById("cancelBtn").addEventListener("click", () => {
  text.value = "";
});