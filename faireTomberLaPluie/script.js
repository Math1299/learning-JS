const body = document.body;

//création d'une goutte d'eau tous les 0.01 sec
setInterval(rainfall, 10);

function rainfall() {
    const waterDrop = document.createElement("i");

    waterDrop.classList.add("fas", "fa-tint");
    waterDrop.style.fontSize = Math.random() * 7 + "px"; //taille aléatoire entre 0 et 1 multipler par 7 px
    waterDrop.style.animationDuration = Math.random() * 2 + "s"; //duréé aléatoire entre 0 et 1 multipler par 2 secondes
    waterDrop.style.opacity = Math.random() + 0.4;
    waterDrop.style.left = Math.random() * window.innerWidth + "px";

    body.appendChild(waterDrop);

    setTimeout(() => {
        waterDrop.remove();
    }, 6000);
}
