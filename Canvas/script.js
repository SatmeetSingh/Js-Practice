const canvas = document.getElementById("draw");
const colorChange = document.querySelector(".color .input1");
const lineWidth = document.querySelector(".color .input2");
const button = document.querySelector(".color1 .btn");
const Hue = document.querySelector(".color1 .btn1");

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
  canvas.removeEventListener("mousemove", HueDraw);
  let changedColor = e.target.value;
  ctx.strokeStyle = changedColor;
});

lineWidth.addEventListener("change", (e) => {
  let changeWidth = e.target.value;
  ctx.lineWidth = changeWidth;
});

let hue = 0;

function HueDraw(e) {
  if (isDrawing) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
  }
}

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

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

button.addEventListener("click", () => {
  canvas.removeEventListener("mousemove", HueDraw);
  ctx.lineJoin = "square";
  ctx.lineCap = "square";
  ctx.strokeStyle = "#fff";
});

let useHueDraw = false;

Hue.addEventListener("click", () => {
  useHueDraw = !useHueDraw;
  if (useHueDraw) {
    canvas.addEventListener("mousemove", HueDraw);
  } else {
    canvas.removeEventListener("mousemove", HueDraw);
  }
});

canvas.addEventListener("mousemove", (e) => {
  draw(e);
});
