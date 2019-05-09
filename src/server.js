const express = require('express');
const mongoose = require('mongoose');

const app = express(); 

mongoose.connect("mongodb+srv://dbratti_learning:foryoureyesonly@cluster0-r2zm7.mongodb.net/test?retryWrites=true",
{
  useNewUrlParser: true
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3333);