const start = document.querySelector("#start-date");
const end = document.querySelector("#end-date");
const today = new Date().toISOString().split("T")[0];
console.log(today);

start.value = today; //on ajoute la date du jour
start.min = today; //on ne permet pas de choisir un jour précédent à aujourd'hui

//on défini au minimum la date j+1 pour celle de départ
const tomorrowDate = () => {
    let day = new Date(today);
    day.setDate(day.getDate() + 1);
    let tomorrow = day.toISOString().split("T")[0];
    end.value = tomorrow;
    end.min = tomorrow;
};
tomorrowDate();

//on relie l'action de la date de départ qui influe sur la date de départ min
start.addEventListener("change", (e) => {
    let day = new Date(e.target.value);
    day.setDate(day.getDate() + 1);
    let tomorrow = day.toISOString().split("T")[0];
    end.value = tomorrow;
    end.min = tomorrow;
});

//calcul de la durée du séjour en jour
const bookingTotal = () => {
    let date1 = new Date(start.value);
    let date2 = new Date(end.value);
    let diff = Math.abs(date2 - date1); //on obtient l'écart en milisec
    let diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24)); //formule pour transcrire diff en nombre de jour

    let nightPrice = document.querySelector("#nightPrice").innerHTML; //on récupère le prix de la nuit
    let total = diffDay * nightPrice; //on multiplie le nombre de nuitée par le prix unitaire
    document.querySelector("#total").innerHTML = total; //on injecte le résultat dans #total
    console.log(diffDay);
};
//il faut absoluement mettre le addEventListener sur start et end pour relancer le calcul à chaque changement
start.addEventListener("change", () => bookingTotal());
end.addEventListener("change", () => bookingTotal());
bookingTotal();
