// 📦 Zaimportuj moduły 'fs' oraz 'STATUS_CODE' do obsługi produktów.
const fs = require('fs');
const {STATUS_CODE} = require('../constants/statusCode');

// 🏗 Stwórz funkcję 'productRouting', która obsłuży żądania dotyczące produktów.
function productRouting(request, response){
    const {url, method} = request;

    if (method === 'GET' && url.startsWith('/product/add')){
        return renderAddProductPage(response);
    }
    if (method === 'POST' && url.startsWith('/product/add')){
        return addNewProduct(request, response);
    }
    if (method === 'GET' && url.startsWith('/product/new')){
        return renderNewProductPage(response);
    }

    response.statusCode = STATUS_CODE.NOT_FOUND;
    response.setHeader('Content-Type', 'text/html');
    response.write('<html><head><title>404</title></head><body><h1>404 - Not Found</h1></body></html>');
    response.end();

    console.warn(`ERROR (${new Date().toUTCString()}): Page not found ${url})`)
}

function renderAddProductPage(response){
    response.setHeader('Content-Type', 'text/html');
    response.write('<html><head><title>Shop - Add product</title></head>');
    response.write('<body><h1>Add product</h1>');
    response.write('<form action="/product/add" method="POST"><label for="title">Title: </label><br>');
    response.write('<input type="text" id="title" name="title"><br>');
    response.write('<label for="desc">Description: </label><br>');
    response.write('<input type="text" id="desc" name="desc"><br>');
    response.write('<input type="submit" value="submit"><br></form>');
}
// 🏗 Stwórz funkcję 'renderAddProductPage', która wyrenderuje stronę dodawania produktu.

function renderNewProductPage(request, response){

}
// 🏗 Stwórz funkcję 'renderNewProductPage', która wyświetli najnowszy produkt z pliku 'product.txt'.
// Podpowiedź: fileSystem.readFile(...);


function addNewProduct(request, response){
    console.log(request);
}
// 🏗 Stwóz funkcję 'addNewProduct', która obsłuży dodawanie nowego produktu, zapisywanie go do pliku 'product.txt' oraz przeniesie użytkownika na stronę '/product/new'.
// Podpowiedź: fileSystem.writeFile(...);
// Podpowiedź: response.setHeader("Location", "/product/new");

// 🔧 Wyeksportuj funkcję 'productRouting', aby inne moduł mogły jej używać.
module.exports = {
    productRouting,
};
