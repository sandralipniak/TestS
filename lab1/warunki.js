//cw. 3.1.a. Sprawdza czy podana liczba jest dodatnia, ujemna czy równa zero

let number = 7;

if (number > 0) {
    console.log("Liczba dodatnia");
} else if (number < 0) {
    console.log("Liczba ujemna");
} else {
    console.log("Liczba równa zero");   
}

//cw. 3.1.b. Określa porę roku na podstawie numeru miesiąca (1-3: zima, 4-6: wiosna, 7-9: lato, 10-12: jesień)

let month = 7;

if (month >= 1 && month <=3){
    console.log("Zima");
} else if (month >= 4 && month <= 6){
    console.log("Wiosna");
} else if (month >= 7 && month <= 9){
    console.log("Lato");
} else if (month >= 10 && month <= 12){
    console.log("Jesień");
} else {
    console.log("Nie ma takiego miesiąca, podaj liczbę z zakresu 1-12");
}

//cw. 3.1.c. Sprawdza czy podany rok jest przestępny (podzielny przez 4, ale nie przez 100, chyba że też przez 400)
let year = 2020;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Rok przestępny");
} else {
    console.log("Rok nieprzestępny");
}

let czyPrzestepny = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? "Rok przestępny" : "Rok nieprzestępny";
console.log(czyPrzestepny);


//cw. 3.1.d. Określa kategorię BMI na podstawie wzrostu i wagi
let weight = 52; //waga w kg
let height = 1.75; //wzrost w metrach

let bmi = weight / (height * height);
console.log("Twoje BMI to: " + bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("Niedowaga");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Waga prawidłowa");
} else if (bmi >= 25 && bmi < 29.9) {
    console.log("Nadwaga");
} else {
    console.log("Otyłość");
}

let kategoriaBmi = (bmi < 18.5) ? "Niedowaga" :
                  (bmi >= 18.5 && bmi < 24.9) ? "Waga prawidłowa" :
                  (bmi >= 25 && bmi < 29.9) ? "Nadwaga" : "Otyłość";
console.log(kategoriaBmi);  
