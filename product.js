const rootDir = require('../util/path.js');
const path=require("path")
 exports.routerget=((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));;
});

exports.routerpost1=((req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

exports.routerpost2 = ((req, res, next) => {
  console.log(req.body);
  res.redirect("/log-in");
});

exports.getshop = ((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  });

exports.geterror =((req, res, next) => {
      res.status(404).sendFile(path.join(__dirname,'views',error.html));
    });
