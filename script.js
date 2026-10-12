const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const list = document.querySelector("#notes-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const note = input.value.trim();
  if (!note) return;

  const item = document.createElement("li");
  const text = document.createElement("span");
  const button = document.createElement("button");

  text.textContent = note;
  button.textContent = "Delete";
  button.className = "delete-btn";

  button.addEventListener("click", () => {
  if (confirm(`Delete "${note}"?`)) {
    item.remove();
  }
});

//   button.addEventListener("click", () => {
//     if (confirm("Delete this note?")) {
//       item.remove();
//     }
//   });

  item.append(text, button);
  list.appendChild(item);
  form.reset();
});