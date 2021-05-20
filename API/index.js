const quote = document.querySelector("#quote");
console.log(quote);

const getQuote = () => {
    fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
            quote.innerHTML = data.content;
        });

    fetch("https://picsum.photos/1600/1000").then((response) => {
        console.log(response.url);
        document.getElementById("pic").innerHTML = `<img src=${response.url} />`;
    });
};

quote.addEventListener("click", () => {
    getQuote();
});
