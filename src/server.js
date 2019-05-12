const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express(); 

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

//divide contexts, every room has its own context
io.on('connection', socket => {
  //console.log('ok');
  socket.on('connectRoom', box => {
    socket.join(box);
  })
});

app.use((req, res, next) => {
  req.io = io;

  return next();
});

mongoose.connect("mongodb+srv://dbratti_learning:foryoureyesonly@cluster0-r2zm7.mongodb.net/test?retryWrites=true",
{
  useNewUrlParser: true
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..','tmp')));

app.use(require('./routes'));

server.listen(3333);