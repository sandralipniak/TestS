
//cw2.1
function srednia(a, b, c){
    return (a+b+c)/3
}

console.log(srednia(2,4,6));


//cw2.1.b:

function czyParzysta(liczba){
    if(liczba%2===0){
        return true;
    } 
    else {return false;}

};

console.log(czyParzysta(4));


//cw2.1.c.:

function najdluzszy(tekst1, tekst2, tekst3){
    let najwiecej = 0;
    

}

const pomnozPrzezDwa = (a) => a*2;


const powitanie = (imie, godzina) => `Cześć ${imie}, jest juz ${godzina} godzina`;

console.log(powitanie("Sandra", 18));

const obliczSrednia2 = (a, b, c) => (a+b+c)/3;

//cw podatek

const obliczPodatek = (kwota, stawka = 0.23) => kwota*stawka;

console.log(obliczPodatek(1000));
console.log(obliczPodatek(20, 0.1));


const stworzProfile = (imie, nazwisko, wiek, miasto) => {return{
    
        imie: imie,
        nazwisko: nazwisko,
        wiek: wiek,
        miasto: miasto,
    };
};

console.log(stworzProfile("Anna", "Kowalska", 25, "Warszawa"));



//cw petla tabliczka mnozenia
function tabliczka(number){
    for(let i = 1; i <=10; i++){
        let wynik = i*number;
        console.log(`${number} * ${i} = ${wynik}`);
    }
}

tabliczka(5);

for(let i = 1; i <=10; i++){
    let wynik = i*7;
    console.log(`7 * ${i} = ${wynik}`);
}

let sumParzystych = 0;
for(let i=2; i<=20; i++){
    if(i%2===0){
        sumParzystych = sumParzystych + i;
    }

}
console.log(sumParzystych);


function suma_a(c, a = 2, b = 3){
return a+b+c;
};

console.log(suma_a(5));

let tablica = [0, 3, 4, 6, 7, 8];

function czyParzysta(tablica){
    let parzyste = [];
    for (let i = 0; i <tablica.length; i++) {
    if(tablica[i] %2 === 0){
        parzyste.push(tablica[i]);
    };
    };
    return parzyste.length;
    }

console.log(czyParzysta(tablica));

let owoce = ["jabłko", "banan", "gruszka"];
owoce.unshift("truskawka");
console.log(owoce);

let samochod = {

    marka: "Porshe",
    model: "911",
    rok: 2020,

    przedstawSie: function(){return `To jest ${this.marka} ${this.model} z roku ${this.rok}`;},

};

console.log(samochod.marka);

samochod.rok = 2022;
console.log(samochod.rok);
delete samochod.model;
console.log(samochod);
console.log(samochod.przedstawSie());