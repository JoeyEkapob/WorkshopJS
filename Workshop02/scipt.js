const balance = document.querySelector('#balance')
const money_plus = document.querySelector('#money-plus')
const money_minus = document.querySelector('#money-minus')
const list = document.querySelector('#list')
const form = document.querySelector('#form')
const text = document.querySelector('#text')
const amount = document.querySelector('#amount')
let dataall = []

form.addEventListener('submit',adddata)

    function removedata(id){
        dataall = dataall.filter((data)=>data.id !== id)
        init()
    }

    function autoid(){
        return Math.floor(Math.random()*10000000)
    }

 
    function init(){
        list.innerHTML=''; 
        dataall.forEach(caldata);
        totalmoney();

    }


    function caldata(data2){
            const symbol = data2.amount < 0 ?`${data2.amount}`:`+${data2.amount}`
            const status = data2.amount < 0 ?`minus`:`plus`
            const resulttext = data2.text 
            const item = document.createElement('li')
            item.classList.add(status)
            item.innerHTML = `${resulttext} <span>${formatNumber(symbol)}</span><button class="delete-btn" onclick="removedata(${data2.id})">x</button>`
            list.appendChild(item)
        }
            
            //console.log(item)
        

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    function totalmoney(){
        const value = dataall.map(data => data.amount);
        const total = value.reduce((result,item)=>(result+=item),0).toFixed(2)
        const totalput = value.filter((data)=>data>0).reduce((result,item)=>(result+=item),0).toFixed(2)
        const totalout = (value.filter((data)=>data<0).reduce((result,item)=>(result+=item),0)*-1).toFixed(2)

        
        balance.innerText = `$ ${formatNumber(total)}`
        money_plus.innerText = `$ ${formatNumber(totalput)}`
        money_minus.innerText = `$ ${formatNumber(totalout)}`
   
   }
   function adddata(e){
    e.preventDefault() //ไม่ใหเรีเฟส
   if(text.value.trim() === '' || amount.value.trim() ===''){
       alert('กรุณากรอกข้อมูลในช่องว่าง')
   }else{
      const data = {id:autoid(),text:text.value,amount:+amount.value}
      dataall.push(data) 
      caldata(data);
      totalmoney();
       text.value ='';
       amount.value=''; 
       
   } 
   
}




init()