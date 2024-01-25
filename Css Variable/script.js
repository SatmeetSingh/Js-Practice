const inputs = document.querySelectorAll(".controls input");
console.log(inputs);

function handleEvent() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleEvent));
inputs.forEach((input) => input.addEventListener("mousemove", handleEvent));
