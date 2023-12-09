document.getElementById("hideForaWhile").style.display = "none";

function treatMent() {
    event.preventDefault();

    let treatSelect = document.getElementById("selectTreatment").value;
    let price = 0;

    if (treatSelect === "RTC") {
        price = 500;
    } else if (treatSelect === "Root Canal") {
        price = 6000;
    } else if (treatSelect === "Teeth Cleaning") {
        price = 750;
    } else if (treatSelect === "Teeth Removing") {
        price = 1750;
    }

    document.getElementById("displayResult").innerHTML = "Treatment : " + treatSelect + "<br>Price = " + price;
    document.getElementById("hideForaWhile").style.display = "block";
}

function selectYourDate() {
    event.preventDefault();

    let dateIng = document.getElementById("selectDate").value;
    let treatSelect = document.getElementById("selectTreatment").value;
    let price = 0;

    if (treatSelect === "RTC") {
        price = 500;
    } else if (treatSelect === "Root Canal") {
        price = 6000;
    } else if (treatSelect === "Teeth Cleaning") {
        price = 750;
    } else if (treatSelect === "Teeth Removing") {
        price = 1750;
    }

    let sittings;

    if (treatSelect === "RTC") {
        sittings = 7;
    } else if (treatSelect === "Root Canal") {
        sittings = 10;
    } else if (treatSelect === "Teeth Cleaning") {
        sittings = 1;
    } else if (treatSelect === "Teeth Removing") {
        sittings = 4;
    }

    let results;

    if (dateIng === "15 - 12 - 23" || dateIng === "16 - 12 - 23" || dateIng === "17 - 12 - 23" || dateIng === "18 - 12 - 23" ) {
        results = "Treatment : " + treatSelect + "<br>Price = " + price + "<br>Sittings = " + sittings + "<br>Date = " + dateIng;
    } else {
        results = "Invalid Input";
    }

    document.getElementById("displayDate").innerHTML = results;
}