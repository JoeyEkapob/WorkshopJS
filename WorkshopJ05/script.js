  const word = document.querySelector("#word")
const text = document.querySelector("#text")
const scoreEl = document.getElementById('score');
const time = document.querySelector("#time")
const levelbtn = document.getElementById('level-btn');
const settings  = document.querySelector("#settings")
const sgame = document.getElementById('start');
const levelel = document.getElementById('level');
const gameover = document.querySelector("#gameover-container")

const words = ["มี","ลา","เด้อ"]



let radomwords 
let score = 0
let timeradom = 0
let  saveMode = localStorage.getItem('mode') !== null ? localStorage.getItem('mode') : 'medium';

let level = 'medium'
 const timedown = setInterval(updetetime,1000) 




function getrandomword(){
    return words[Math.floor(Math.random()*words.length)]
    //return words[Math.floor(Math.random()*words.length)]

}
function lockinput(){
    levelel.disabled = !levelel.disabled; 
}
function displaywordtwo(){

    radomwords= getrandomword();
    word.innerHTML = radomwords
    time.innerHTML = timeradom

}
function displaywordone(){

    saveMode = localStorage.getItem('mode') !== null ? localStorage.getItem('mode') : 'medium';
    start.style.display="none"
   // levelel.value = saveMode
    startgametwo();
    lockinput();
    radomwords= getrandomword();
    word.innerHTML = radomwords
    time.innerHTML = timeradom
}

function startgameone(){

    sgame.innerHTML=`<h1>กดเริ่มเกมเลยยยย</h1>
    <button onclick="displaywordone()">เริ่มเกม</button>`

    start.style.display="flex"
    levelel.value = saveMode
    //console.log(levelel.value)
}

function startgametwo(){

     if(saveMode == 'easy'){
        timeradom = 10;

     }else if(saveMode == 'medium'){
        timeradom = 5;

     }else if(saveMode == 'hard'){
        timeradom = 3;

     }


}
text.addEventListener('input',(e)=>{
  // console.log(e.target.value)
    const inputtext = e.target.value

    console.log(saveMode)
    if(inputtext === radomwords){
        if(saveMode == 'easy'){
            timeradom +=5
            console.log(timeradom)

         }else if(saveMode == 'medium'){
            timeradom +=3
            //console.log(timeradom)
         }else if(saveMode == 'hard'){
            timeradom +=2
            //console.log(timeradom)

         }
         displaywordtwo();
        updatascore();
        e.target.value ='';
    }
}) 
function updatascore(){

    if(saveMode == 'easy'){
        score +=5
        

     }else if(saveMode == 'medium'){
        score +=10
        //console.log(timeradom)
     }else if(saveMode == 'hard'){
        score +=15
        //console.log(timeradom)

     }
    scoreEl.innerHTML = score;

}
function updetetime(){
    timeradom --;
    time.innerHTML = timeradom
    if(timeradom == 0){
        clearInterval(timedown)
        gamecomplece()
    }
}
function gamecomplece(){
    gameover.innerHTML=`<h1>จบเกมเเล้วนะครับ</h1>
    <p>คะเเนนของคุณ = ${score}</p>
    <button onclick="regame()">เล่นอีกครั้ง</button>`
    gameover.style.display="flex"

}
function regame(){
   location.reload()
}

levelbtn.addEventListener('click',()=>{
    settings.classList.toggle('hide');
})



levelel.addEventListener('change',(e)=>{
    //console.log(e.target.value)
     level = e.target.value
     localStorage.setItem("mode",level) 
 
 })

startgameone()

/* text.focus() */

