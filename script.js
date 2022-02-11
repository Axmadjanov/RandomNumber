const randomNum = document.querySelector(".randomNum1")
const checkButton = document.querySelector(".checkButton")
const number = document.querySelector(".number")
const Guessing = document.querySelector(".guessing")
const resultScore1 = document.querySelector(".resultScore1")
const highScore1 = document.querySelector(".highScore1")

randomNum.textContent=Math.floor(Math.random() * 10)


checkButton.addEventListener("click",()=>{
    if(number.value === randomNum.textContent){
         Guessing.textContent="Corret number";
    }
    if( number.value > randomNum.textContent ){
            Guessing.textContent="Too high";
    resultScore1.textContent --;
    }
    if(number.value < randomNum.textContent){
            Guessing.textContent="Too low";
    resultScore1.textContent --;
    }


})
