//Tous les types de constante

const array = [];
const string = "je suis une chaine de caractère";
const number = 45;
const boolean = true;

//les array ATTENTION LE PREMIER INDEX COMMENCE TOUJOURS A ZERO

const arrayVille = ["Paris", "Lyon", "Frontenex"];
console.log(arrayVille); // on récupère le tableau dans son intégralité
console.log(arrayVille[1]); // on récupère l'index 1 soit la seconde position dans le tableau
console.log(arrayVille[2][5]); // on récupère la nième lettre de la troisième position dans le tableau

//Boucle for
// ========> on liste tous les éléments présents dans le tableau arrayVille  <====================
for (let i = 0; i < arrayVille.length; i++) {
    console.log(arrayVille[i]);
}

//un tableau avec différent type de données
const array2 = ["Crans", 45, ["Nyon", "Lausane"], true];
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
    console.log(typeof array2[i]);
}

//ranger par ordre alphabétique
arrayVille.sort();
console.log(arrayVille);

//********************************************************** */

//https://www.youtube.com/watch?v=QB1DTl7HFnc&list=PLEiMYEzpB4Qt1mtW0yzJDJccqp7LKQBeF

const input = document.querySelector("input");
const video = document.querySelector("#video");
let link = "";

input.addEventListener("input", (e) => {
    changeLink(e.target.value);
    if (link) {
        video.innerHTML = `<iframe width="1280" height="720" src=${link}
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
});

const changeLink = (linkToChange) => {
    let embed = linkToChange.replace("watch?v=", "embed/");
    link = embed.split("&")[0];
    console.log(link);
};
