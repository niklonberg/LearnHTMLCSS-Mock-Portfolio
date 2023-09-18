//this project will start out in default dark mode.

//if user prefers light mode, we add a "light-theme" class to our
//html element, which will change the colors used
const toggleTheme = document.querySelector("#toggle-theme");

toggleTheme.addEventListener("click", () => {
  if (!document.documentElement.classList.contains("light-theme")) {
    document.documentElement.classList.add("light-theme");
  } else {
    document.documentElement.classList.remove("light-theme");
  }
});

const prefersLight = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (prefersLight) {
  document.documentElement.classList.add("light-theme");
}
