function changeBG() {
    const r = getRandomRGB();
    const g = getRandomRGB();
    const b = getRandomRGB();

    const colorString = `rgb(${r}, ${g}, ${b})`;
    console.log(colorString);
    document.body.style.background = colorString;
    document.querySelector("#color").innerHTML = colorString;
}

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}

setInterval(changeBG, 3000);
