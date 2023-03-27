const divider = document.getElementById("divider");
const container = document.getElementById("video-container");

let isDragging = false;

divider.addEventListener("mousedown", (e) => {
  isDragging = true;
});

document.addEventListener("mouseup", (e) => {
  isDragging = false;
});

container.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const x = e.pageX - container.offsetLeft;
    divider.style.left = x + "px";
    document.getElementById("video1").style.width = x + "px";
    document.getElementById("video2").style.width = container.offsetWidth - x + "px";
  }
});