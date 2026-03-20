const http = require('http')
const fs = require('fs')
let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })

    if (req.url == '/')

        fs.createReadStream("/home/yaroslav/ml-projects/it_project/front/html/main.html").pipe(res)
    else if (req.url == '/index')
        fs.createReadStream('/home/yaroslav/ml-projects/it_project/front/html/index.html').pipe(res)

    else
        fs.createReadStream("/home/yaroslav/ml-projects/it_project/front/html/error.html").pipe(res)


})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => { console.log(`server is up http://${HOST}:${PORT}`) })