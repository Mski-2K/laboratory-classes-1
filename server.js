// 📦 Musisz zaimportować tutaj moduł 'http'.
// 📦 Żeby użyć tutaj PORT, musisz zaimportować go z modułu konfiguracyjnego z pliku 'config.js'.
// 📦 Zaimportuj funkcję 'requestRouting' z modułu 'routing/routing.js'.
const http = require('http');
const config = require('./config.js');

// 🏗 Tutaj, stwórz funkcję 'requestListener, która przekazuje 'request' i 'response' do 'requestRouting'.

function requestListener(request, response) {

}

// 🏗 Tutaj, stwóz serwer Node.js. Pamiętaj przypisać go do stałej i przekazać mu 'requestListener'.
http.createServer(requestListener).listen(config.PORT);
// 🏗 Uruchom serwer na porcie PORT.
// Podpowiedź: server.listen(???);
