let student = {
    imie: "Sandra",
    nazwisko: "Lipniak",
    wiek: 24,
    kierunek: " Informatyka",
    srednia: 5.0,
    przedstawSie: function(){ 
        return `Jestem ${this.imie}, ${this.nazwisko}`; 
    }
};

console.log(student.przedstawSie());

student.uczelnia = "AGH";
student.jakieStudia = function(){ return `Studiuję ${this.kierunek} na ${this.uczelnia}`};
console.log(student.jakieStudia());

//samochody
let samochod = {
    marka: "Porshe",
    model: "911",
    rocznik: 2020,
    cena: 600000,
    czySprawny: true,
}

samochod.opisSamochodu = function(){ return `Opis samochodu: ${this.marka}, ${this.model}, ${this.rocznik}, ${this.cena} PLN`};
console.log(samochod.opisSamochodu());

samochod.obliczWiek = function(biezacyRok){return `Wiek samochodu: ${biezacyRok - this.rocznik} lat`};
console.log(samochod.obliczWiek(new Date().getFullYear()));

let liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// forEach - wykonaj dla każdego elementu
console.log("Wszystkie liczby:");
liczby.forEach(function(liczba) {
console.log(liczba);
});

let samochody = [];
function Samochod(marka, model, rocznik, cena, czySprawny) {
    return {
        marka: marka,
        model: model,
        rocznik: rocznik,
        cena: cena,
        czySprawny: czySprawny,
        opisSamochodu: function() {
            return `Opis samochodu: ${this.marka}, ${this.model}, ${this.rocznik}, ${this.cena} PLN`;
        }

    };
};

samochody.push(Samochod("Toyota", "Corolla", 2018, 80000, true));   
samochody.push(Samochod("Ford", "Focus", 2016, 60000, false));
samochody.push(Samochod("Honda", "Civic", 2019, 90000, true));

samochody.forEach(function(samochod) {console.log(samochod)});
samochody.forEach(function(samochod){console.log(samochod.opisSamochodu())});   


//tablica liczb
let liczby = [];
for(let i = 1; i<= 10; i++){
    liczby.push(randomIntFromInterval(1,100));
    
}

