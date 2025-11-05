let randomTable = [];

for (i=1; i<=10; i++){
    randomTable.push(Math.floor(Math.random() * 100) + 1);
};
console.log(randomTable);

//najwieksza liczba w tablicy

let max = randomTable[0];
for (i=1; i<randomTable.length; i++){
    if (randomTable[i] > max){
        max = randomTable[i];
    }   
}


let sumaArtymetyczna = 0;
function sredniaArytmetyczna(suma, iloscElementow){
    return suma / iloscElementow;
}   

for (i = 1; i < randomTable.length; i++){
    sumaArtymetyczna += randomTable[i];
}

sredniaArytmetyczna(sumaArtymetyczna, randomTable.length);
console.log("Srednia arytmetyczna wynosi: " + sredniaArytmetyczna(sumaArtymetyczna, randomTable.length));
