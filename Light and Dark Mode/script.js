const Switch = document.querySelector(".switch");
const body = document.querySelector("body");
const innerSwitch = document.querySelector(".inner-switch");
const innerContainer = document.querySelector(".inner-container");
const paragraph = document.querySelector(".paragraph");
let clickCount = 0;

const switchDark = JSON.parse(localStorage.getItem("Switch"));
const innerSwitchDark = JSON.parse(localStorage.getItem("innerSwitch"));

if (switchDark) {
  document.body.classList.add("dark");
  paragraph.innerHTML = `<i class="fa-regular fa-sun"></i> Light Mode`;
  clickCount === 1;
}

if (innerSwitchDark) {
  innerContainer.classList.add("dark");
  innerSwitch.innerHTML = ` <i class="fa-regular fa-sun"></i> &nbsp;Container Light Mode`;
  clickCount === 1;
}

Switch.addEventListener("click", () => {
  clickCount++;
  changeFullDarkMode();
});

function changeFullDarkMode() {
  if (clickCount % 2 === 0) {
    document.body.classList.remove("dark");
    paragraph.innerHTML = ` <i class="fa-regular fa-moon"></i> &nbsp;Dark Mode`;
    localStorage.setItem("Switch", false);
  } else {
    document.body.classList.add("dark");
    paragraph.innerHTML = `<i class="fa-regular fa-sun"></i> Light Mode`;
    localStorage.setItem("Switch", true);
  }
}

function changeContainerMode() {
  if (clickCount % 2 === 0) {
    innerContainer.classList.remove("dark");
    innerSwitch.innerHTML = `<i class="fa-regular fa-moon"></i> &nbsp;Container Dark Mode`;
    localStorage.setItem("innerSwitch", false);
  } else {
    innerContainer.classList.add("dark");
    innerSwitch.innerHTML = ` <i class="fa-regular fa-sun"></i> &nbsp;Container Light Mode`;
    localStorage.setItem("innerSwitch", true);
  }
}

innerSwitch.addEventListener("click", (e) => {
  clickCount++;
  changeContainerMode();
});
