//Grab things we need

const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

//Linking lives to text 
playerLivesCount.textContent = playerLives;

//Generate the object data 

const getData = () => [
    { imgSrc: "./images/beatles.jpeg", name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" },
    { imgSrc: "./images/beatles.jpeg", name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" }
];

//Rndomize card function 
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//Card generate function 
const cardGenerator = () => {
    const cardData = randomize();

    //Generate element
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        //Attach imgs to the cards
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        })
    });
};

//Check cards if they match
const checkCards = (e) => { 
    console.log(e);
    const clickedCard = e.target;

    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");

    if(flippedCards.length === 2){ 
        if(flippedCards[0].getAttribute("name")===
        flippedCards[1].getAttribute("name")
        ){
            console.log("match");
        } else {
            console.log("wrong");
            flippedCards.forEach( (card) => { 
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000)
            });
        }
    }
}

cardGenerator()