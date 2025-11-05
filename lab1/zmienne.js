//cwiczenie 1.1

let nazwisko = "Lipniak";
const rokUrodzenia = 2001;
let rok = 2025;

let wiek = rok - rokUrodzenia;
console.log("Wiek:", wiek);

console.log("Type of 'nazwisko':", typeof nazwisko);
console.log("Type of 'rok':", typeof rok);
console.log("Type of 'wiek':", typeof wiek);



//cwiczenie 1.2

let hobby = "malowanie";
let czyLubieProgramowac = true;
let liczbaUlubionychKolorow = 2;
console.log(`Zmienne: ${hobby}, ${czyLubieProgramowac}, ${liczbaUlubionychKolorow}`);
console.log("Type of 'hobby': ", typeof hobby);
console.log("Type of 'czyLubieProgramowac': ", typeof czyLubieProgramowac);
console.log("Type of 'liczbaUlubionychKolorow': ", typeof liczbaUlubionychKolorow);

//cwiczenie 1.3
let liczbaUser = "7";
let liczbaInt = parseInt(liczbaUser);
let liczbaFloat = parseFloat(liczbaUser);
let kwadratInt = liczbaInt ** 2;
let kwadratFloat = liczbaFloat ** 2;
let wynikString = kwadratInt.toString();
console.log("Wynik final:", wynikString);



