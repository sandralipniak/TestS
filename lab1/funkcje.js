//cwiczenie 2.1

//srednia arytmetyczna

function srednia(a, b, c) {
    return (a+b+c)/3;
}

//parzystosc
function czyParzysta(liczba){
    return liczba%2 === 0;

}

//najdluzszy z tekstów
function najdluzszeTekst(tekst1, tekst2, tekst3){
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

console.log(srednia(2,4,6));
console.log(czyParzysta(4));
console.log(czyParzysta(5));

console.log(najdluzszeTekst("Ala", "Kasia", "Ewa"));
console.log(najdluzszeTekst("Ala", "Kasia", "Aleksander",));
console.log(najdluzszeTekst("Ala", "Aleksandra", "Aleksander",));

