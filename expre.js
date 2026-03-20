const express = require('express')
const app = express()
const path = require('path');

// Указываем, что папка со статикой (css, картинки) находится в front/css
app.use(express.static(path.join(__dirname, 'front/css')));

// То же самое для JS, если он в front/js
app.use(express.static(path.join(__dirname, 'front/js')));
app.use(express.urlencoded({ extended: false }))
    //app.set('view engine', 'ejs')
app.get('/', (req, res) => { res.sendFile('/home/yaroslav/ml-projects/it_project/front/html/main.html') })
app.get('/index', (req, res) => { res.sendFile('/home/yaroslav/ml-projects/it_project/front/html/index.html') })
app.listen(3001, () => { console.log('Server started: http://localhost:3001') })
app.post('/', (req, res) => {
    let a = req.body.name
    if (a == "")
        return res.redirect('/')
    else
        return res.redirect('/user/' + a)
})