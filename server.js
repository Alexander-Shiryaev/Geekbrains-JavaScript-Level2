const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);

    //----------Вариант преподавателя

    const publicPath = './public';

    let body = null;
    try {
        body = fs.readFileSync(`${publicPath}${req.url}`)
    } catch (e) {
        console.log(e);
        body = fs.readFileSync(`${publicPath}/index.html`)
    }

    //----------Мой вариант

    // let body;

    // if (req.url === '/style.css') {
    //     body = fs.readFileSync('./public/style.css');
    // } else if (req.url === '/script.js') {
    //     body = fs.readFileSync('./public/script.js');
    // } else {
    //     body = fs.readFileSync('./public/index.html');
    // }

    res.end(body);
});

const port = process.env.PORT || 3000;
server.listen(port);

console.log(`Server started on port ${port}`);