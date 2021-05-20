const darkMode = document.querySelector("#dark-mode");

darkMode.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});
