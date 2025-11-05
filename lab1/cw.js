//1

function roznica(a, b){
    return a-b
}

console.log(roznica(2, 4));

//funkcja strzalkowa mnozenie
const mnozenie = (a, b) => a*b;
console.log(mnozenie(2, 4));

const suma = (a, b) => a+b;
console.log(suma(2, 4));

//funkcja

function czyPodzielna(a){
    if(a%3===0){
        return true;
    }else{return false}
};

console.log(czyPodzielna(4));


//dodawanie do tablicy

let tablica = [1, 2, 3];

function dodajElement(tablica, el){
    tablica.push(el);
    return tablica;
}

console.log(dodajElement(tablica, "kot"));
