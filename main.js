//this project will start out in default dark mode.

//if user prefers light mode, we add a "light-theme" class to our
//html element, which will change the colors used
const toggleTheme = document.querySelector("#toggle-theme");

toggleTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");
});

const prefersLight = window.matchMedia("(prefers-color-scheme:light)").matches;

if (prefersLight) {
  document.documentElement.classList.add("light-theme");
}
