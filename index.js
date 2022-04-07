const http = require('http');

const server = http.createServer(function (request, response) {
    response.write('Hello World');
    response.end();
});

server.listen(proces.env.PORT ││ 3000, function () {
    console.log('Servidor escuchando peticiones');
})