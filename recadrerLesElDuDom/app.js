const main = document.querySelector(".main");

document.addEventListener("mousedown", (e) => {
    // set mousemove-x
    if (e.target.className == "drag-x") {
        console.log("bravo");
        document.onmousemove = (e) => {
            document.querySelector(".box-1").style.flex = "0 0" + e.clientX / (main.clientWidth / 100) + "%";
        };
    }
    //set mousemove-y
    else if (e.target.className == "drag-y") {
        document.onmousemove = (e) => {
            document.querySelector(".top").style.flex = "0 0" + e.clientY / (main.clientHeight / 100) + "%";
        };
    }
});

//stop everything in mouseup
document.addEventListener("mouseup", (e) => {
    if (e.target != null) {
        document.onmousemove = null;
        document.onselectstart = null;
        e.target.ondragstart = null;
    }
});
