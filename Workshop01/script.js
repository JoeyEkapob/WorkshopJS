    
    let currencyone = document.getElementById('currency-one')
    if(currencyone ==''){
        currencyone ='THB'
    }
   
    let currencytwo = document.getElementById('currency-two')
    if(currencytwo ==''){
        currencytwo ='USB'
    }
   
    const inputone = document.getElementById('amount-one')
    const inputtwo = document.getElementById('amount-two')
    
    const ratetext = document.getElementById('rate')
    const data = document.getElementById('data')
    const btn = document.getElementById('btn')
    const test = document.getElementById('test')

    currencyone.addEventListener('change',calculatemoney); //เมื่อมีการเปลี่ยนให้เรียกใช้ฟังช์ชั้น
    currencytwo.addEventListener('change',calculatemoney); //เมื่อมีการเปลี่ยนให้เรียกใช้ฟังช์ชั้น
    inputone.addEventListener('input',calculatemoney); //เมื่อมีการป้อนค่าให้เรียกใช้ฟังช์ชั้น
    inputtwo.addEventListener('input',calculatemoney); //เมื่อมีการป้อนค่าให้เรียกใช้ฟังช์ชั้น
   
    function calculatemoney(){
        let one = currencyone.value
        if(one ==''){
            one ='THB'
        }
       
        let two = currencytwo.value
        if(two ==''){
            two ='USD'
        }
        fetch(`https://v6.exchangerate-api.com/v6/a260185d8cd6803f10522458/latest/${one}`).then((res)=>res.json()
       
    ).then((ess) =>{
            const money = ess.conversion_rates
            ratetext.innerText = `1 ${one} = ${money[two]} ${two}`
            inputtwo.value=(inputone.value*money[two]).toFixed(2);
             data.innerText = `ค่าเงิน ณ วันที่ ${ess.time_last_update_utc.substr(0, 16)}` 
        })
    }
    btn.addEventListener('click',()=>{
        const switch1 =  currencyone.value 
        currencyone.value = currencytwo.value 
        currencytwo.value = switch1
        calculatemoney();
    }); 

    fetch(`https://v6.exchangerate-api.com/v6/a260185d8cd6803f10522458/latest/THB`)
    .then((data)=>data.json()).then((namemoney)=>{
        const name_money = namemoney.conversion_rates
       /*  console.log(name_money) */
            Object.keys(name_money).forEach(key => {
            const namemoneyitem = document.createElement('option')
            namemoneyitem.value = key;
            namemoneyitem.text = key;
            if (key === 'THB') {
                namemoneyitem.selected = true;
              }
            currencyone.append(namemoneyitem);
            const namemoneyitem2 = document.createElement('option');
            namemoneyitem2.value = key;
            namemoneyitem2.text = key;
            if (key === 'USD') {
                namemoneyitem2.selected = true;
              }
            currencytwo.append(namemoneyitem2);
           
            
        });  
    })
  
    

     calculatemoney(); 