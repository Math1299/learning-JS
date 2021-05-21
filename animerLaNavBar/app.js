navBar = document.querySelector("#navbar");
navElements = document.querySelector("#nav-elements");

window.addEventListener("scroll", function () {
    const scroll = this.document.documentElement.scrollTop;
    console.log(scroll);
    if (scroll > 60) {
        navBar.style.height = "7vh";
        navElements.style.height = "7vh";
        navBar.style.background = "rgba(52,187,255,0.884";
    } else {
        navBar.style.height = "10vh";
        navElements.style.height = "10vh";
        navBar.style.background = "#34bdff";
    }
});
