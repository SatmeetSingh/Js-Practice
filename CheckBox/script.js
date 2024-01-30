let CheckBoxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;
function handleCheck(e) {
  let isBetween = false;
  if (e.shiftKey && this.checked) {
    CheckBoxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        isBetween = !isBetween;
      }

      if (isBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

CheckBoxes.forEach((CheckBox) =>
  CheckBox.addEventListener("click", handleCheck)
);
