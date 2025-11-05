// cw. 4.1. Tworzy obiekt samochod z właściwościami: marka, model, rok, cena, czySprawny

let samochod = {
    marka: "BMW",
    model: "X5",
    rok: 2022,
    cena: 300000,
    czySprawny: true,
};

samochod.opisSamochodu = function(){return `Marka: ${this.marka}, Model: ${this.model}, Rok: ${this.rok}, Cena: ${this.cena}, Sprawny: ${this.czySprawny}`};
console.log(samochod.opisSamochodu());

samochod.obliczWiek = function(){return new Date().getFullYear() - this.rok};
console.log(`Samochód ma: ${samochod.obliczWiek()} lat`);


//tablica 3 samochodow

let samochody = [];
 function stworzSamochod(marka, model, rok, cena, czySprawny){
    return {
        marka: marka,
        model: model,
        rok: rok,
        cena: cena,
        czySprawny: czySprawny,
        opisSamochodu: function(){return `Marka: ${this.marka}, Model: ${this.model}, Rok: ${this.rok}, Cena: ${this.cena}, Sprawny: ${this.czySprawny}`},
        obliczWiek: function(){return new Date().getFullYear() - this.rok}
    }};

samochody.push(stworzSamochod("Audi", "A6", 2020, 250000, true));
samochody.push(stworzSamochod("Mercedes", "C200", 2018, 200000, false));
samochody.push(stworzSamochod("Toyota", "Corolla", 2019, 150000, true));

for (let i = 1; i<=samochody.length; i++){
    console.log(`Samochód ${i}: ${samochody[i-1].opisSamochodu()}`);
}

