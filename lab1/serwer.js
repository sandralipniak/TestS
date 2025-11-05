// serwer.js
const http = require('http');
const url = require('url');
// Funkcja obsługująca żądania
function obslugaZadan(req, res) {
const parsedUrl = url.parse(req.url, true);
const sciezka = parsedUrl.pathname;
// Ustawienie nagłówków HTTP
res.writeHead(200, {
'Content-Type': 'text/html; charset=utf-8',
'Access-Control-Allow-Origin': '*'
});
// Routing na podstawie ścieżki
if (sciezka === '/') {
res.end('<h1>Strona główna</h1><p>Witaj na moim serwerze!</p>');
} else if (sciezka === '/about') {
res.end('<h1>O nas</h1><p>To jest strona o nas.</p>');
} else if (sciezka === '/pies') {
res.end('<h1>Psy</h1><p>To jest strona o naszych psach.</p>');
} else if (sciezka === '/kontakt') {
res.end('<h1>Kontakt</h1><p>Email: kontakt@example.com</p>');
} else if (sciezka === '/slonce') {
res.end('<h1>Nasz znak</h1><p>`Email: kontakt@example.com`</p>');
}else {
res.writeHead(404);
res.end('<h1>404 - Strona nie znaleziona</h1>');
}
}
// Tworzenie serwera
const serwer = http.createServer(obslugaZadan);
// Uruchomienie serwera na porcie 3000
const PORT = 5001;
serwer.listen(PORT, () => {console.log(`Serwer działa na http://localhost:${PORT}`);
});
