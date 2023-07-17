 const  form = document.querySelector('#form')
const search = document.querySelector('#search')
const result = document.querySelector('#result')
const more = document.querySelector('#more')

const apiURL="https://api.lyrics.ovh/";


form.addEventListener('submit',e=>{
    e.preventDefault() // ไม่กระพริบหน้าจอ
    const songtxt = search.value.trim();

    if(!songtxt){
        alert('กรุณาป้อนข้อมูล')
    }else{
        searchmusic(songtxt);
    }

});
async function searchmusic(data){
      const res = await fetch(`${apiURL}suggest/${data}`);
        const songall   = await res.json() 
      /*   console.log(songall) */
        shownamesong(songall)
}  
 
function shownamesong(data){
    result.innerHTML=`
        <ul class="songs">${data.data.map(data=>`
            <li> 
                <span>
                <strong>${data.artist.name}</strong>-${data.title}
                </span>  
                <button class="btn" 
                data-artist="${data.artist.name} " data-name="${data.title} " >เนื้อเพลง </button>
            </li>  `
        ).join("")}
        </ul>
   `
    if(data.next ||data.prev  ){
        more.innerHTML=`${data.prev ? `<button class="btn"  onclick="getmosong('${data.prev}')" > ก่อนหน้า </button>`:' '}${data.next ? `<button class="btn" onclick="getmosong('${data.next}')"> ถัดไป </button>`:' '}`
    }else{
        more.innerHTML="";
    }
}
async function getmosong(song){


    const res =  await fetch(`https://cors-anywhere.herokuapp.com/${song}`);
    const songall = await res.json();
    shownamesong(songall);
}

 result.addEventListener('click',e=>{
    const clicke = e.target
    const artist = clicke.getAttribute('data-artist');
    const name = clicke.getAttribute('data-name');
    showdatasong(artist,name)
   /*  console.log(songall) */

  
    
} ) 

async  function showdatasong(artist,name){
    const res = await fetch(`${apiURL}v1/${artist}/${name}`); 
    const songall   = await res.json() 
    const lyrics   = songall.lyrics
    if(songall){
        result.innerHTML = `<h2><span>
        <strong>${artist}</strong> - ${name}
        </span></h2>
        <span>${lyrics}</span>`
    }else{
        result.innerHTML = `<h2><span>
        <strong>${artist}</strong> - ${name}
        </span></h2>
        <span>ไม่มีเนิ้อเพลง</span>`
    }
    more.innerHTML="";
 
}


   
   
