let moves;
let moveCounter = document.getElementById("moves");
let openCards = [];
const deck = document.querySelector(".card_deck")
let matchedCards = 0;


//STAR VARIABLES: 
let star1 = document.querySelector("#star-one"); 
let star2 = document.querySelector("#star-two");
let star3 = document.querySelector("#star-three");
let star4 = document.querySelector("#star-four");

// GAME TIMER VARIABLES: 
let tens = document.querySelector("#tens");
let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");
let Interval;

// MODAL VERIABLES:
let myModal = document.querySelector(".modal-container");
let body = document.querySelector("body");

//  RESTART/ PLAY AGAIN BUTTON: 
const restartButton = document.querySelector(".restart");
const playAgain = document.querySelector("#play-again");

restartButton.addEventListener("click", playNewGame);
playAgain.addEventListener("click", playNewGame);





// *appears on the message after the game is won. 

/*
 * Create a list that holds all of your cards
 */
/*needs the class names of all 16 cards */
let myCards = ["fa fa-bomb","fa fa-bomb", "far fa-smile", "far fa-smile", "fas fa-code", "fas fa-code", "fas fa-chess", "fas fa-chess", "fas fa-user-secret", "fas fa-user-secret", "fas fa-frog","fas fa-frog", "fas fa-kiwi-bird", "fas fa-kiwi-bird", "fas fa-chess-king", "fas fa-chess-king"];



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// dynamamically inserted cards
//CREATES THE CARDS IN THE DECK: 
let createCards = function(cards){
    for(let card of cards) {
        let newCard = document.createElement("li");
        newCard.innerHTML =`<li class="card" data-card= ${card}><i class="${card} icon"></i></li>`
    
        deck.appendChild(newCard);
        deck.addEventListener('click', startTimer, {once: true});
        
    };
};  

// SHUFFLE THE CARDS IN THE DECK:
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    };
    // returns a shuffled array:
    return array;
};


//START GAME: 
startGame();

// START GAME: 
function startGame(){
    createCards(shuffle(myCards));
    moves = 0;
    moveCounter.textContent = moves;
    matchedCards = 0;

    tens.innerHTML = 0 + "0";
    seconds.innerHTML = 0 + "0";
    minutes.innerHTML = 0 + "0";      
};

// FUNCTION TO PLAY A NEW GAME: 
function playNewGame(){
    deck.innerHTML = "";
    clearInterval(Interval);
    myModal.classList.remove("display-modal")
    startGame();
};

/*
 * set up the event listener for a card. If a card is clicked: when a card is clicked, it is given the class of open.
 * 
 */ 

function startTimer(){
    let counter = 0;
    let tensVal = 0;
    let secondsVal = 0;
    let minutesVal = 0;
  
    
    Interval = setInterval(function() {
        counter++;
        tensVal = counter % 100;
        secondsVal = parseInt(counter / 100);
  
      if(secondsVal > 59) {
        secondsVal = secondsVal % 60;
        }

        minutesVal = parseInt (counter / 6000);
        tens.innerHTML = ('00' + tensVal).slice(-2);
        seconds.innerHTML = ('00' + secondsVal).slice(-2);
        minutes.innerHTML = ('00' + minutesVal).slice(-2);
    }, 10 );
};

deck.addEventListener("click", openedCards);
function openedCards(e){
    let card = e.target;
    let cardChild = e.target.firstChild;
    
        /*  - if the list already has another card, check to see if the two cards match*/
        // replace "if" for "when": 
    if(openCards.length < 2 && !card.classList.contains("open")){
         card.classList.add("open", "show");
         openCards.push(cardChild);
    
        if(openCards.length === 2) {
            checkMatch();
        };        
    };
};


 /*    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)*/

// CHECK IF CARDS MATCH/ NO MATCH:  
function checkMatch() {
    if(openCards[0].className === openCards[1].className){
        openCards[0].parentElement.classList.add("match", "rotate-center");
        openCards[1].parentElement.classList.add("match", "rotate-center");
        openCards = [];
        matchedCards++;

    } else{

        setTimeout(function(){
            openCards[0].parentElement.classList.add("flip-vertical-right");
            openCards[1].parentElement.classList.add("flip-vertical-right");
        }, 1000); 

        setTimeout(function(){
        openCards[0].parentElement.classList.remove("open", "show","flip-vertical-right");
         openCards[1].parentElement.classList.remove("open", "show","flip-vertical-right");
         openCards = [];
        }, 1200);          
    };

    updateMoves();
    starRating();

    if(matchedCards === 8){
        clearInterval(Interval);
        displayModal();
    };
};


//increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//FUNCTION TO UPDATE THE NUMBER OF MOVES:
function updateMoves(){
    moves++;
    moveCounter.textContent = moves;    
};


/**reduce star rating**/ 
// FUNCTION TO UPDATE THE STAR-RATING: 
function starRating(){
    if(moves >16 && moves<= 18){
        star4.classList.remove("rating");
    } else if(moves > 18 && moves <= 21 ){
        star3.classList.remove("rating");
    } else if(moves > 21 && moves <=25){
        star2.classList.remove("rating");
    } else if(moves > 25){
        star1.classList.remove("rating");
    }
};


// DISPLAY FINAL SCORE: 
// THE MODAL: 
  // + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)

function displayModal(){
    clearInterval(Interval);

    myModal.classList.add("display-modal");
    document.getElementById("final-moves").innerHTML = `Completed in ${moves} moves`;
    
    document.getElementById("final-stars").innerHTML = document.querySelector(".stars").outerHTML;

    document.querySelector("#final-time").textContent = (`With a time of ${minutes.innerHTML} minutes, and ${seconds.innerHTML} seconds.`)
};





