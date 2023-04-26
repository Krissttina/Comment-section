//input
const text = document.getElementById("bodyText");
const body = document.getElementById("body");

//Comment Button
document
  .getElementById("commentBtn")
  .addEventListener("click", () => {
    const div = document.createElement('div');
    div.className = 'comment';

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    
    const p = document.createElement('p');
    p.textContent = text.value;

    text.value = '';

    body.appendChild(div);
    div.appendChild(p);
    div.appendChild(delBtn);

    delBtn.addEventListener('click', () => {
        div.remove();
    })
  });
  //Cancel Button
document.getElementById("cancelBtn").addEventListener('click', () => {
    text.value = '';
});