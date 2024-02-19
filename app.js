const allbtn = document.getElementsByClassName("btn_seat");
let total = 0;
let count = 0;
 for (const btn of allbtn){
    btn.addEventListener('click', function(e){
        count = count +1;
        if(count<=4){
            // btn style
            btn.style.backgroundColor = '#1DD100';
           
            btn.disabled = true;
            total = tictekPrice(count)
            document.getElementById("total_cost").innerText = total;
            document.getElementById("grandTotal").innerText = total;
        
            const totalSeat = document.getElementById('total_seat');
            totalSeat.innerText = parseInt(totalSeat.innerText) - 1;
            const selectSeat = document.getElementById('select_seat').innerText = count;

            
            //  create a tablerow
            const tableBody = document.getElementById("tableBody");
            const newRow = document.createElement('tr');

            const seatName = document.createElement('td');
            const seatClass = document.createElement('td');
            const seatPrice = document.createElement('td');

            seatName.innerText = btn.innerText;
            seatClass.innerText ="economoy";
            seatPrice.innerText = 550;
            newRow.appendChild(seatName);
            newRow.appendChild(seatClass);
            newRow.appendChild(seatPrice);

            tableBody.appendChild(newRow);
          
        
        }

        })
}



let nextBtn = document.getElementById('nextBtn');
nextBtn.disabled =true;


const apply = document.getElementById('applyBtn');
const inputValues = document.getElementById('inputVal');
apply.style.backgroundColor ='gray'
inputValues.addEventListener("keyup", function(event){
    const text = event.target.value;
    nextBtn.disabled=false;
    
    if(text === "NEW15"){
        apply.removeAttribute('disabled');
        apply.style.backgroundColor ='green'
        apply.addEventListener('click', function (){
            document.getElementById("discountDiv").classList.remove('hidden');
            
            let t = (i/100)*15;
            let discount = t;
            document.getElementById('discount').innerText = discount;
            let cost = i-t;
            document.getElementById('grandTotal').innerText = cost;
            document.getElementById('cuponDiv').classList.add('hidden');
            for (const b of allbtn){
                b.disabled = true;
            }
            
            

        })
    }

    else if(text === "Couple 20"){
        
            apply.removeAttribute('disabled');
            apply.style.backgroundColor ='green'
            apply.addEventListener('click', function (){
                document.getElementById("discountDiv").classList.remove('hidden');
                
                let t = (i/100)*20;
                let discount = t;
                document.getElementById('discount').innerText = discount;
                let cost = i-t;
                document.getElementById('grandTotal').innerText = cost;
                document.getElementById('cuponDiv').classList.add('hidden');
                for (const b of allbtn){
                    b.disabled = true;
                }
                
                
    
            })
        
    }
    else{
        apply.setAttribute("disabled", true);
}
})






let i =0;

function tictekPrice(tictek){
    let num = tictek*550;
    i=num;
    return num;

}


