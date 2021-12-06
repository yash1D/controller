const path=require("path")

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminroutes = require('./routes/admin.js');

const shoproutes = require('./routes/shop.js');

const loginroutes = require('./routes/log-in.js')

const Myerrorproduct = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

  app.use('/admin',adminroutes);
  app.use('/log-in',loginroutes);

  app.use(shoproutes);

  app.use(Myerrorproduct.page404)


app.listen(3000);
