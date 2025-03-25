// 📦 Musisz zaimportować tutaj moduł 'http'.
// 📦 Żeby użyć tutaj PORT, musisz zaimportować go z modułu konfiguracyjnego z pliku 'config.js'.
// 📦 Zaimportuj funkcję 'requestRouting' z modułu 'routing/routing.js'.
const http = require('http');
const config = require('./config');
const {requestRouting} = require('./routing/routing');

// 🏗 Tutaj, stwórz funkcję 'requestListener, która przekazuje 'request' i 'response' do 'requestRouting'.

function requestListener(request, response) {
    requestRouting(request, response);
}

// 🏗 Tutaj, stwóz serwer Node.js. Pamiętaj przypisać go do stałej i przekazać mu 'requestListener'.
const server = http.createServer(requestListener);
// 🏗 Uruchom serwer na porcie PORT.
server.listen(config.PORT, () => {
    console.log(`Server working on http://localhost:${config.PORT}`);
})
// Podpowiedź: server.listen(???);
