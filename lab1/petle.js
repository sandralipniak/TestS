//cw. 3.2.a. Tabliczka mnozenia dla 7
let wynik = 1;
for (let i = 1; i <= 10; i++) {
    wynik = 7 * i;
    console.log(`7 * ${i} = ${wynik}`)
}


//cw 3.2.b. 

let suma = 0;
for (let i = 2; i <= 20; i++){
    if (i %2 ===0){
        suma = suma + i;
        //console.log(suma);
    }
}

console.log(`Suma liczb parzystych od 2 do 20 to: ${suma}`);

//cw 3.2.c. Tworzy wzór gwiazdek (trójkąt): pierwsza linia 1 gwiazdka, druga 2 gwiazdki, itd. do 5 linii


for (let i = 1; i <= 5; i++){
    let gwiazdki = "";
    
    for (let j = 1; j <= i; j++){
        gwiazdki = gwiazdki + "*";
    }

    console.log(gwiazdki);
    

}



//cw 3.2.d. Liczby pierwsze od 2 do 30

console.log("Liczby pierwsze od 2 do 30:");

for (let liczba = 2; liczba <= 30; liczba++) {
  let jestPierwsza = true;

  for (let dzielnik = 2; dzielnik < liczba; dzielnik++) {
    if (liczba % dzielnik === 0) {
      jestPierwsza = false;
      break; 
    }
  }

  if (jestPierwsza) {
    console.log(liczba);
  }
}


//cw. 3.3  a. Pętla while, która dzieli liczbę 20 przez 2 dopóki nie jest mniejsza od 1

let cyfra = 20;
while (cyfra >=1){
    cyfra = cyfra/2;
    console.log(cyfra);
}

//cw. 3.3.b. losowanie liczby od 1 do 100 dopóki nie wylosuje liczby większej niż 90

let wylosowana;
let licznik = 0;
do {
    wylosowana = Math.floor(Math.random() * 100) + 1;

    licznik ++;

} while (wylosowana <= 90);
console.log(`Wylosowano ${wylosowana}. Liczba losowan: ${licznik}`);


//cw. 3.3.c. Gra w zgadywanie liczby
const los = Math.floor(Math.random() * 10) + 1; 
const proby = [2, 7, 1, 8, 5, 4]; 

console.log("Komputer wylosował liczbę! Czas sprawdzić, czy się zgadza");

for (let i = 0; i < proby.length; i++) {
  console.log(`Próba ${i + 1}: użytkownik zgadł ${proby[i]}`);
  if (proby[i] === los) {
    console.log(`Udało się - odgadnięta liczba to ${los}.`);
    break;
  } 
  else if (i === proby.length - 1) {
    console.log(`Nie udało się, liczba to ${los}.`);
  }
}
