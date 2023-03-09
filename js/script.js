// Chiedi nome e cognome del passeggero
// chiedere numero di chilometri da percorrere
// chiedere età del passeggero
// il prezzo pieno del biglietto è definito in base ai km (0.21 € al km)
// applicare uno sconto del 20% per i minorenni
// applicare uno sconto del 40% per gli over 65.


const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {

    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;
    console.log(userName);

    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value;
    console.log(userAge);

    const distanceInput = document.getElementById("distance");
    const distance = parseFloat(distanceInput.value);
    console.log(distance);


    const priceKm = 0.21;
    let fullPrice = (distance * priceKm);
    console.log(fullPrice);

    let result = ""

    if (userAge === "under18"){
        const discount = (fullPrice * 20 / 100);
        result = (fullPrice - discount).toFixed(2);
        console.log(result);    
        
    } else if (userAge === "over65"){100
        const discount = (fullPrice * 40 / 100);
        result = (fullPrice - discount).toFixed(2);
        console.log(result);
            
    } else{
        result = fullPrice
        console.log(result);
    }

});

