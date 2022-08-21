const express = require('express');
const app = express();
const http = require('http').Server(app);

const io = require('socket.io')(http);

io.on('connection', socket => {
    console.log('a user has been connected');
    socket.emit('msg', {body: 'Olá fulano!'});
    setInterval(() => socket.emit('msg', {body: 'Olá interval!'}), 3000);
    socket.on('msg', msg => {
        console.log(msg);
    })
})


app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));

http.listen(3000, () => console.log('Running port 3000'));

