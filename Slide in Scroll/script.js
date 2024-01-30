function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const SliderImg = document.querySelectorAll(".slide-in");

window.addEventListener(
  "scroll",
  debounce((e) => {
    SliderImg.forEach((slideImage) => {
      let ImageInAt = scrollY + window.innerHeight - slideImage.height / 2;
      let ImageBottom = slideImage.offsetTop + slideImage.height;
      let isHalf = ImageInAt > slideImage.offsetTop;
      let isNotScrollPass = window.scrollY < ImageBottom;
      if (isHalf && isNotScrollPass) {
        slideImage.classList.add("active");
      } else {
        slideImage.classList.remove("active");
      }
    });
  })
);
