const toggleButton = document.querySelector("#toggle-button");
const sideBar = document.querySelector("#side-bar");

toggleButton.addEventListener("click", show);

function show() {
    sideBar.classList.toggle("active");
}

//remove la sidebar if click on the main content

const content = document.querySelector(".content");

content.addEventListener("click", () => {
    sideBar.classList.remove("active");
});
