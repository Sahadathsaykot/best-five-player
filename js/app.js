let temp =0;

// list item added fucntion 
function liAdded(innerContent){
    const orderList= document.getElementById('order-list');
    if(temp!==5){
        const li= document.createElement('li');
        li.innerText= innerContent;
        orderList.appendChild(li);
        temp= temp+1;
    }
    else{
        alert('You can select Maximum 5 Players');
    }    
}

// player select and value getting fucntion 
function valueGettingFunction(button, innerText){
    document.getElementById(button).addEventListener('click', function(){
        this.disabled = true;
        const innerContent= document.getElementById(innerText).innerText; 
        liAdded(innerContent);
    })
}

// passing the value to the function 
valueGettingFunction('btn-one','inner-text-1');
valueGettingFunction('btn-two','inner-text-2');
valueGettingFunction('btn-three','inner-text-3');
valueGettingFunction('btn-four','inner-text-4');
valueGettingFunction('btn-five','inner-text-5');
valueGettingFunction('btn-six','inner-text-6');
valueGettingFunction('btn-seven','inner-text-7');
valueGettingFunction('btn-eight','inner-text-8');
valueGettingFunction('btn-nine','inner-text-9');


// String to int Conversion Function 
function stringToInt(cost){
    const costString= cost.value;
    const costInt=parseInt(costString);
    return costInt;
}

// player Cost calculation part 
const totalPlayerCost= document.getElementById('toal-player-cost');
document.getElementById('calculate-btn').addEventListener('click', function(){
     const perPlayerCost=document.getElementById('per-player-cost');
     const perPlayerCostString= perPlayerCost.value;
     const perPlayerCostInt=parseInt(perPlayerCostString);  
     totalPlayerCost.innerText=perPlayerCostInt*temp;   
})

// total cost calculation part 
document.getElementById('calculate-total-btn').addEventListener('click', function(){
     const cost=document.getElementById('manager-cost');
     const managerCost=stringToInt(cost);
     const cost1=document.getElementById('coach-cost');
     const coachCost= stringToInt(cost1);    
     const totalCost=document.getElementById('total-cost');
     totalCost.innerText= managerCost+coachCost+parseInt(totalPlayerCost.innerText);
})



