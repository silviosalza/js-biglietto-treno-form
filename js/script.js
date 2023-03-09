
const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {

// Chiedi nome e cognome del passeggero
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;
    console.log(userName);

// chiedere età del passeggero
    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value;
    console.log(userAge);

// chiedere numero di chilometri da percorrere
    const distanceInput = document.getElementById("distance");
    const distance = parseFloat(distanceInput.value);
    console.log(distance);

// il prezzo pieno del biglietto è definito in base ai km (0.21 € al km)
    const priceKm = 0.21;
    let fullPrice = (distance * priceKm);
    console.log(fullPrice);

    let result = ""
    let ticketType = ""

// applicare uno sconto del 20% per i minorenni
// applicare uno sconto del 40% per gli over 65.
    if (userAge === "under18"){
        const discount = (fullPrice * 20 / 100);
        result = (fullPrice - discount).toFixed(2);
        ticketType = "Biglietto Young"
        console.log(result);   
        
        
    } else if (userAge === "over65"){100
        const discount = (fullPrice * 40 / 100);
        result = (fullPrice - discount).toFixed(2);
        console.log(result);
        ticketType = "Biglietto Standard"
           
    } else{
        result = fullPrice.toFixed(2);
        console.log(result);
        ticketType = "Biglietto Forever Young"
    }

    //genero numero codice CP e coach

    const CPcode = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    console.log(CPcode);
    const coach = Math.floor(Math.random() * (13 - 1 + 1)) + 1;
    console.log(coach);

    //stampo output
    document.getElementById("fullname").innerHTML = userName; 
    document.getElementById("offer").innerHTML = ticketType;  
    document.getElementById("coach").innerHTML = coach;   
    document.getElementById("ticket-num").innerHTML = CPcode;   
    document.getElementById("ticket-price").innerHTML = result + " €";     
});

const eraseBtn = document.getElementById("erase-btn");
eraseBtn.addEventListener("click", function() {

    document.getElementById("user-name").value = "";
    document.getElementById("user-age").value = "";
    document.getElementById("distance").value = "";
})