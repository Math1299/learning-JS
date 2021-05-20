//clickEvents

const btn = document.querySelector("#btn");
const img = document.querySelector("img");

// avec toggle on add puis remove au click
btn.addEventListener("click", () => {
    img.classList.toggle("show");
});

// mouseEvents
const mouseEvents = document.querySelector(".mouseEvents");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouseEvents.addEventListener("mousemove", (e) => {
    // console.log("top de top ");
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvents.style.left = (e.x / window.innerWidth) * 100 + "%";

    if (e.x > 100 && e.x < 150) {
        document.body.style.filter = "blur(3px)";
        mouseEvents.style.background = "red";
    } else {
        mouseEvents.style.background = "lightblue";
        document.body.style.filter = "none";
    }
});

// inputEvents
document.querySelector("input").addEventListener("input", (e) => {
    console.log(e.target.value);
    // vertical.innerHTML = e.target.value;
});

// themeEvents
const theme = document.querySelectorAll(".theme");

theme.forEach((item) => {
    item.addEventListener("click", (e) => {
        document.body.classList.remove("darktheme");
        document.body.classList.remove("yellowtheme");
        document.body.classList.remove("salmontheme");
        console.log(e.target.id);
        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darktheme");
                break;
            case "salmon":
                document.body.classList.add("salmontheme");
                break;
            case "yellow":
                document.body.classList.add("yellowtheme");
                break;
            default:
                null;
        }
    });
});
