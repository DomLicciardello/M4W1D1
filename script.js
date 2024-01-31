// esercizio 1 ------------------------------------
/*
let numberOne = 40;
let numberTwo = 10;

function exercise1 (n1,n2) {
    if (n1==50 || n2==50){
        return true;
    } else if (n1+n2==50) {
        return true;
    } else {
        return false;
    }
}

let result = exercise1 (numberOne, numberTwo);

console.log(result)
*/
// esercizio 2 ------------------------------------
/*
let string = `Ciao mi chiamo Domenico!`;
let index = 15;

function exercise2 (stringa, posizione) {
   let carattere = stringa.charAt(posizione);
   let cambio = stringa.replace(carattere, "");
   return cambio;
}

let result = exercise2 (string, index);

console.log(result);
*/
// esercizio 3 ------------------------------------
/*
let numberOne = 70
let numberTwo = 100

function exercise3 (n1,n2){
    if (n1>=40&&n1<=60 && n2>=40&&n2<=60){
        return true;
    } else if (n1>=70&&n1<=100 && n2>=70&&n2<=100){
        return true;
    } else {
        return false;
    }
}

let result = exercise3(numberOne,numberTwo);
console.log(result);
*/
// esercizio 4 ------------------------------------
/*
let city = "Los Angeles"

function exercise4(cityname){
    if (cityname.includes("Los")){
        return cityname;
    } else if (cityname.includes("New")){
        return cityname;
    } else {
        return false;
    }
}

let result = exercise4(city);
console.log(result);
*/
// esercizio 5 ------------------------------------
/*
let array = ["Ciao", "mi chiamo", "Domenico,", "ho", 30, "anni!"]

function exercise5(){
    let totElement = ""
    array.forEach(element => {
        totElement += element
    });
    totElement = array.join(" ")
    console.log(totElement);
}

let result = exercise5();
*/
// esercizio 6 ------------------------------------
/*
let array = [1,2,3,4,5,6,7,8,9,10];

function exercise6(){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element == 1){
            return true;
        } else if (element == 3){
            return true;
        } else {
            return false;
        }
    }
}
 let result = exercise6();
 console.log(result)
 */
// esercizio 7 ------------------------------------
/*
function exercise7(gradi){
    if (gradi<90){
        return "acuto";
    } else if (gradi>90 && gradi<180){
        return "ottuso";
    } else if (gradi==90){
        return "retto";
    } else if (gradi==180){
        return "piatto";
    } else {
        return "error";
    }
}

let result = exercise7(180);
console.log(result);
*/
// esercizio 8 ------------------------------------
/*
let frase = "Federazione Italiana Giuoco Calcio"

function exercise8(){
    let acronimo = []
    const array = frase.split(' ');
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let iniziali = element.charAt(0);
        acronimo.push(iniziali);
    }
    let risultato = acronimo.join('');
    console.log(risultato);
}

let result = exercise8()
*/