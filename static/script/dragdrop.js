document.querySelectorAll("section").forEach(section => {
  section.addEventListener("drop", event => drop(event));
  section.addEventListener("dragover", event => allowDrop(event));
  section.addEventListener("dragenter", event => dragenter(event));
  section.addEventListener("dragleave", event => dragLeave(event));
  section.addEventListener("dragend", event => dragEnd(event));
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

  let target = ev.target;

  if (target.hasAttribute("draggable")) {
    target = target.parentElement;
  }

  target.appendChild(drag);
}

function dragenter(ev) {
  let target = ev.target;

  if (target.hasAttribute("draggable")) {
    target = target.parentElement;
  }

  target.classList.add("bg-info");
}

function dragLeave(ev) {
  let target = ev.target;

  if (target.hasAttribute("draggable")) {
    target = target.parentElement;
  }

  target.classList.remove("bg-info");
}

function dragEnd(ev) {
  let target = ev.target;

  if (target.hasAttribute("draggable")) {
    target = target.parentElement;
  }

  target.classList.remove("bg-info");
}