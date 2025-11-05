//cw 2.2: Funkcje strzałkowe
//srednia(a, b, c) 

const srednia = (a, b, c) => (a+b+c)/3;

console.log(srednia(2,2,2));

//parzystosc

const czyParzysta = (liczba) => liczba%2 ===0;
console.log(czyParzysta(4));


//najdluzszy tekst

const najdluzszeTekst = (tekst1, tekst2, tekst3) => {
	let teksty = [tekst1, tekst2, tekst3];
	let najdluzszeTeksty = [];
	let maxDlugosc = 0;
	
	for (let i = 0; i < teksty.length; i++){
		if (teksty[i].length > maxDlugosc){
			maxDlugosc = teksty[i].length;
			najdluzszeTeksty = [teksty[i]];
			}
			
		else if(teksty[i].length === maxDlugosc){
			najdluzszeTeksty.push(teksty[i]);
		
		}
		
	}
	return najdluzszeTeksty


}
console.log(najdluzszeTekst("Ala","Kasia","Ewa"));

//pomnoz przez dwa

const pomnozPrzezDwa = (liczba) => liczba*2;
console.log(pomnozPrzezDwa(5));

//powitaniePersonalizowane - funkcja strzałkowa, która przyjmuje imię i godzinę, zwraca odpowiednie powitanie ("Dzień dobry", "Dobry wieczór" itp.)

const powitaniePersonalizowane = (imie, godzina) => {
    if (godzina >=6 && godzina < 18){
        return `Dzień dobry, ${imie}`;
    }
    else if (godzina >=18 && godzina < 22){
        return `Dobry wieczór, ${imie}`;
    }
    else {
        return `Dobranoc, ${imie}`;
    }

}

console.log(powitaniePersonalizowane("Sandra", 10));


//cw 2.3: Domyslne wartosci parametrow

//oblicza podatek od podanej kwoty

const obliczPodatek = (kwota, stawka = 0.23) => kwota*stawka;

console.log(obliczPodatek(100));
console.log (obliczPodatek(100, 0.25));

//tworzeni profilu
const stworzProfile = (imie, wiek = 18, kraj = "Polska", aktywny = true) => {
  return {
    imie: imie,
    wiek: wiek,
    kraj: kraj,
    aktywny: aktywny
  };
};


console.log(stworzProfile("Sandra"));