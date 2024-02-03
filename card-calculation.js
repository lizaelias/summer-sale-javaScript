

let sum = 0;

function allEventHandel(id, value) {
    
    const placeText = document.getElementById('entry-name');
    const item = document.createElement('p');
    placeText.appendChild(item)
    const number = placeText.childElementCount;
    item.innerHTML = ` 
      ${number } ${id}
    `
    sum = sum + value;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = sum;

  

    if (sum > 0) {
        
        const buyButton = document.getElementById('buy-button');
        buyButton.removeAttribute('disabled');
    }



   

}


   

function discount() {

     
        const totalDiscount = sum * 0.20;
        document.getElementById('discount').innerText = totalDiscount.toFixed(2);
        
        const totalAmount = sum - totalDiscount;
        document.getElementById('total').innerText = totalAmount.toFixed(2);
        
       
 
}

document.getElementById('inputFelid').addEventListener('keyup',function (event) {
    
    const button = document.getElementById('apply-button');
    const code = event.target.value;
    if (sum >= 200 && code === 'SELL200') {
        button.removeAttribute('disabled');
    } else {
        
        button.setAttribute('disabled',true);
    }
})

document.getElementById('home').addEventListener('click', function () {
    
    location.reload();
})





function cardOne() {

    const textElement = document.getElementById('price');
    const text = textElement.innerText;
    const valueText = parseFloat(text);
    allEventHandel('K. Accessories',valueText);
   
}


function cardTow() {

    const textElement = document.getElementById('price-two');
    const text = textElement.innerText;
    const valueText = parseFloat(text);
    allEventHandel('K. Accessories',valueText);
    
}

function cardThree() {

    const textElement = document.getElementById('price-three');
    const text = textElement.innerText;
    const valueText = parseFloat(text);
    allEventHandel('Home Cooker',valueText);
    
    
}
  
function cardFor() {

    const textElement = document.getElementById('price-for');
    const text = textElement.innerText;
    const valueText = parseFloat(text);
    allEventHandel('Sports Back Cap',valueText);
    
    
  }


  function cardFive() {

    const textElement = document.getElementById('price-five');
    const text = textElement.innerText;
    const valueText = parseFloat(text);
    allEventHandel('Full Jersey Set',valueText);
    
    
}
  

function cardSix() {

    const textElement = document.getElementById('price-six');
    const text = textElement.innerText;
    const valueText = parseFloat(text);
    allEventHandel('Sports cates',valueText);
    
    
}
  
function cardSeven() {

    const textElement = document.getElementById('price-seven');
    const text = textElement.innerText;
    const valueText = parseFloat(text);
    allEventHandel('Single Relax Chair',valueText);
    
    
  }

  function cardEight() {

    const textElement = document.getElementById('price-eight');
    const text = textElement.innerText;
    const valueText = parseFloat(text);
    allEventHandel('Children play',valueText);
    
    
}
  
function cardNine() {

    const textElement = document.getElementById('price-nine');
    const text = textElement.innerText;
    const valueText = parseFloat(text);
    allEventHandel('Flexible Sofa',valueText);
    
    
  }



