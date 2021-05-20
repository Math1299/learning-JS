// let startingMinutes = 2;
// let time = startingMinutes * 60;
// const countDownEl = document.querySelector("#countDown");

// setInterval(updateCountDown, 1000); //on prédéfini l'interval de notre fonction updateCountDown toute les secondes

// function updateCountDown() {
//     const minutes = Math.floor(time / 60); // arrondie vers le chiffre inf 1.8 => 1
//     let seconds = time % 60; // pour récupérer les secondes car modulo => le reste de la division par 60

//     //SI SECONDS INF A 10   ALORS AJOUTE 0 PUIS SECONDS   SINON    SECONDS
//     seconds = seconds < 10 ? "0" + seconds : seconds; //fonction ternaire

//     countDownEl.innerHTML = ` ${minutes} : ${seconds}`; //on ajoute le compte à rebours dans la div

//     if (time > 0) {
//         time--;
//     } else {
//         countDownEl.innerHTML = `IT'S OVER !`;
//     }
// }

function getInputValue() {
    let choice = document.querySelector("#choice").value;
    // console.log(choice);
    if (isNaN(choice)) {
        alert(`Je n'accepte que les nombres !!!!`);
    } else {
        let startingMinutes = choice;
        let time = startingMinutes * 60;
        const countDownEl = document.querySelector("#countDown");

        setInterval(updateCountDown, 1000); //on prédéfini l'interval de notre fonction updateCountDown toute les secondes

        function updateCountDown() {
            const minutes = Math.floor(time / 60); // arrondie vers le chiffre inf 1.8 => 1
            let seconds = time % 60; // pour récupérer les secondes car modulo => le reste de la division par 60

            //SI SECONDS INF A 10   ALORS AJOUTE 0 PUIS SECONDS   SINON    SECONDS
            seconds = seconds < 10 ? "0" + seconds : seconds; //fonction ternaire

            countDownEl.innerHTML = ` ${minutes} : ${seconds}`; //on ajoute le compte à rebours dans la div

            if (time > 0) {
                time--;
            } else {
                countDownEl.innerHTML = `IT'S OVER !`;
            }
        }
    }
}
