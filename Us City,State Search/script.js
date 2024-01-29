const secondInput = document.querySelector(".search");

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

function findMatch(findToMatch, cities) {
  return cities.filter((place) => {
    let regex = new RegExp(findToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const suggestions = document.querySelector(".suggestions");
function displayMatch(e) {
  const matchArray = findMatch(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const StateName = place.state.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      return `
    <li>
    <span class="name">${cityName}, ${StateName}</span>
    <span class="population">${numberWithCommas(place.population)}</span>
    </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}

secondInput.addEventListener("change", displayMatch);
secondInput.addEventListener("keyup", displayMatch);
