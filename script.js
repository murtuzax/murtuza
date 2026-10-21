const musicButton = document.querySelector(".music-icon")
const musicPlayerPopup = document.querySelector(".music-player-popup")
const closeButton = document.querySelector(".close-button")
const themeSwitcher = document.querySelector(".theme-switcher")

const isDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

console.log(isDark ? document.querySelector("html").classList.toggle("dark") : document.querySelector("html").classList.toggle("dark") );

themeSwitcher.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark")
})


document.querySelectorAll(".music").forEach((m) => m.volume = 0.5)

musicButton.addEventListener("click", (e) => {
    musicPlayerPopup.classList.add("open")
      document.body.style.overflow = "hidden";
})

closeButton.addEventListener("click", (e) => {
    musicPlayerPopup.classList.remove("open")
      document.body.style.overflow = "";
})