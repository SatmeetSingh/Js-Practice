const canvas = document.getElementById("draw");
const colorChange = document.querySelector(".color .input1");
const lineWidth = document.querySelector(".color .input2");
const button = document.querySelector(".color1 .btn");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
ctx.strokeStyle = "#BadAss";
ctx.lineWidth = 5;
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastY = window.offsetX;
let lastX = window.offsetY;

colorChange.addEventListener("change", (e) => {
  let changedColor = e.target.value;
  ctx.strokeStyle = changedColor;
});

lineWidth.addEventListener("change", (e) => {
  let changeWidth = e.target.value;
  ctx.lineWidth = changeWidth;
});

button.addEventListener("click", () => (ctx.strokeStyle = "#fff"));

function draw(e) {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
}
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
