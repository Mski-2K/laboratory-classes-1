// 📦 Zaimportuj moduł odpowiedzialne za routing poszczególnych części aplikacji.
// 📦 Zaimportuj obiekt STATUS_CODE.
const {STATUS_CODE} = require('../constants/statusCode');
const {homeRouting} = require('./home');

// 🏗 Stwórz tutaj funkcję 'requestRouting', która będzie obsługiwać zapytania HTTP.
function requestRouting(request, response){
    const {url, method} = request;
    console.log(`INFO (${new Date().toUTCString()}): ${method} - ${url})`);

    if (url === '/'){
        return homeRouting(method, response);
    }

    if (url.startsWith('/product')){
        return productRouting(request, response);
    }

    if (url === '/logout'){
        return logoutRouting(method, response);
    }

    if (url === '/kill'){
        response.statusCode = STATUS_CODE.FOUND;
        response.setHeader('Content-Type', 'text/html');
        response.write('<html><head><title>Kill app</title></head><body><h1>Killed application</h1></body></html>');
    }

    response.statusCode = STATUS_CODE.NOT_FOUND;
    response.setHeader('Content-Type', 'text/html');
    response.write('<html><head><title>404</title></head><body><h1>404 - Not Found</h1></body></html>');
    response.end();

    console.warn(`ERROR (${new Date().toUTCString()}): Page not found ${url})`)
}
// Podpowiedź: const requestRouting = (request, response) => {
// 🏗 Tutaj stwórz logowanie do konsoli informacji, mówiące o typie logowania (INFO), dacie, metodzie oraz url żądania.
// 🏗 Tutaj stwórz podstawowy 'request routing' dla ścieżek '/', zawierającej /product' oraz '/logout'. Przekaż `request` i `routing` do odpowiednio routingu.

// 🏗 Obsłuż specjalny przypadek, jeśli użytkownik zostanie przekierowany na ścieżkę /kill, aplikacja się zamknie.
// 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (PROCESS), dacie oraz informację, że wylogowowyanie zostało wywołane a aplikacja zamknie się.

// 🏗 Tutaj stwórz obsługę przypadku, jeśli żądany URL nie istnieje. Zwróć wtedy błąd 404.
// 🏗 Stwórz również logowanie do konsoli informacji, mówiące o typie logowania (ERROR), dacie oraz informację, że żądany url nie istnieje.
//  };

// 🔧 Wyeksportuj funkcję 'requestRouting', aby inne moduł mogły jej używać.
module.exports = {
    requestRouting: requestRouting,
};