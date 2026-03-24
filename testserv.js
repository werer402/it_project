const express = require('express')
const app = express()
const path = require('path');

// Указываем, что папка со статикой (css, картинки) находится в front/css
app.use(express.static(path.join(__dirname, 'front')));

// То же самое для JS, если он в front/js
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => { res.sendFile('/home/yaroslav/ml-projects/it_project/front/html/test.html') })
app.get('/index', (req, res) => { res.sendFile('/home/yaroslav/ml-projects/it_project/front/html/index.html') })

app.use(express.json({ limit: '50mb' }));
app.post('/api', (req, res) => { res.json({ emotion: 'sad' }) })
app.listen(3001, () => {
    console.log('Server started: http://localhost:3001')


})