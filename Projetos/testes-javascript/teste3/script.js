/*Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function converter(temperature) {
    if (temperature.includes("f")){
        myArray = temperature.split("f")
        noFareheint = myArray.join("")
        newTemp = (noFareheint - 32) * 5/9
        console.log(newTemp + " C")
    }

    if (temperature.includes("F")){
        myArray = temperature.split("F")
        noFareheint = myArray.join("")
        newTemp = (noFareheint - 32) * 5/9
        console.log(newTemp + " C")
    }
    

    if (temperature.includes("c")){
        myArray = temperature.split("c")
        noCelcius = myArray.join("")
        newTemp = noCelcius * 9/5 + 32
        console.log(newTemp + " F")
    }

    if (temperature.includes("C")){
        myArray = temperature.split("C")
        noCelcius = myArray.join("")
        newTemp = noCelcius * 9/5 + 32
        console.log(newTemp + " F")
    }
}

converter("38 C")