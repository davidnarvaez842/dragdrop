document.querySelectorAll("section").forEach(section => {
  section.addEventListener("drop", event => drop(event));
  section.addEventListener("dragover", event => allowDrop(event));
});

document.querySelectorAll('[draggable="true"]').forEach(section => {
  section.addEventListener("dragstart", event => drag(event));
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  let target = ev.target;
  target.setAttribute("selected", "true");
}

function drop(ev) {
  ev.preventDefault();
  const drag = document.querySelector("[selected]");
  drag.removeAttribute("selected");

  let container = ev.target;

  if (container.hasAttribute("draggable")) {
    container = container.parentElement;
  }

  container.appendChild(drag);
}
