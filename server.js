function requireHTTPS (req, res, next) {
    //membuat semua request yang sebelumnya HTTP biasa, menjadi HTTPS
    if(
        !req.secure
        //khusus untuk server yg kita deploy di Heroku
        && req.get('x-forwarded-proto') != 'https'
        ){
            return res.redirect(
                'https://' + req.get('host') + req.url
            )
        }

        //bakal lempar ke handler selanjutnya
    next();
    }

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app .use(requireHTTPS) // kalau dijalankan secara local, comment line ini
    .use(express.static('./dist/UnitTest'))
    .get('/*', (req,res) => res.sendFile('index.html', {root: './dist/UnitTest'}))
    
    .listen(port, () => {
        console.log(`My Angular Application is now Running! http://localhost:${port}`)
    })