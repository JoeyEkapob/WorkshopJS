const word = document.querySelector("#word")
const text = document.querySelector("#text")
const scroe = document.querySelector("#scroe")
const time = document.querySelector("#time")
const levelbtn = document.querySelector("#level-btn")
const settings  = document.querySelector("#settings")
const levelfrom = document.querySelector("#levelfrom")
const level = document.querySelector("#level")
const gameover = document.querySelector("#gameover-container")

const words = ["ตีงูให้หลับ","เข็นครกขึ้นเขา","ตำน้ำพริกลงเรือ"]

let radomwords 
let score = 0
let timeradom = 15

function getrandomword(){
    return words[Math.floor(Math.random()*words.length)]
    //return words[Math.floor(Math.random()*words.length)]

}
function displayword(){
     radomwords= getrandomword();
     word.innerText = radomwords
    
}

displayword();