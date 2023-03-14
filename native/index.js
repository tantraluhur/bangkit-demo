'use strict';

const http = require('http')
const contact = require('./contact.js')

     const server = http.createServer((request, response) => {
        response.setHeader('Content-Type', 'appliaction/json')

        const {url} = request;
        if(url === '/contacts') {
            const {method} = request

            if(method === 'POST') {
                let body = '';

                request.on('data', (chunk) => {
                    body += chunk.toString();
                })
                response.statusCode = 200
                return response.end(JSON.stringify({
                    message: "POST SUCCESS",
                    data: body
                }))

            }
            else {
                response.statusCode = 404;
                return response.end(JSON.stringify({
                    message: "Endpoint not found",
                    data: []
                }))
            }
        }
        else {
            response.statusCode = 404;
            return response.end(JSON.stringify({
                message: "Endpoint not found",
                data: []
            }))
        }
    })
const PORT = 3002
server.listen(PORT, 'localhost', ()=>{
    console.log(`Server running on PORT ${PORT}`)
})