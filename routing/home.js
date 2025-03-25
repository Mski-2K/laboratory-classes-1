// 🏗 Stwórz funkcję 'homeRouting', która obsłuży stronę główną.
// 🏗 Ustaw odpowiedni nagłówek 'Content-Type'.
// Podpowiedź: response.setHeader("Content-Type", "text/html");
// 🏗 Zakończ odpowiedź HTTP po wyrenderowaniu strony.
// Podpowiedź: return response.end();
function homeRouting(method, response){
    response.setHeader('Content-Type', 'text/html');
    response.write('<html><head><title>Shop - Home</title></head>');
    response.write('<body><h1>Home</h1>');
    response.write('<nav><a href="/">Home</a>');
    response.write('<a href="/">Home</a>');
    response.write('<a href="/">Home</a></nav>');
    response.write('</body></html>');
    return response.end();
}

module.exports = {
    homeRouting: homeRouting,
}

// 🔧 Wyeksportuj funkcję 'homeRouting', aby inne moduł mogły jej używać.
