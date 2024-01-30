const pressed = [];

const secretCode = "satmeet";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  console.log(pressed);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes("satmeet")) {
    alert("DING DING! You did it.");
    cornify_add();
  }
});
