// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];

const countryElem = document.querySelector("input");
const possibleElem = document.getElementById("suggestions");

const addPossibleElem = country => {
  const element = document.createElement("div");
  element.classList.add("suggestion");
  element.textContent = country;
  element.addEventListener("click", e => {
    countryElem.value = e.target.textContent;
    possibleElem.innerHTML = "";
  });
  return element;
};

function addEvent() {
    countryElem.addEventListener("input", () => {
    possibleElem.innerHTML = "";
    countryList.forEach(country => {
        if (country.startsWith(countryElem.value)) {
            possibleElem.appendChild(addPossibleElem(country));
            }
        });
    });
}

addEvent()