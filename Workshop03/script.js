const checktheme = document.querySelector('input[type="checkbox"]')
const drak  = document.querySelector('#toggle-icon')
const nav = document.querySelector('#nav')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
checktheme.addEventListener('change',switchmode)
function switchmode(e){
    if(e.target.checked){
        document.documentElement.setAttribute("data-theme",'dark')
        darkmode();
        imgswitchmode('-or');
    }else{
        document.documentElement.setAttribute("data-theme",'light')

        lightmode();
        imgswitchmode();
    }
}
function darkmode(){
  drak.children[0].textContent="โหมดกลางคืน";
  drak.children[1].classList.replace('fa-sun','fa-moon')
  nav.style.background= 'rgb(0 0 0/ 50%)'
  

   
   
}
function lightmode(){
  drak.children[0].textContent="โหมดกลางวัน";
  drak.children[1].classList.replace('fa-moon','fa-sun')
  nav.style.background= 'rgb(255 255 255/ 50%)'

}
function imgswitchmode(mode){
    img1.src=`img/undraw_analysis_dq08${mode}.svg`
    img2.src=`img/undraw_bitcoin_re_urgq${mode}.svg`
    img3.src=`img/undraw_team_up_re_84ok${mode}.svg`
}
