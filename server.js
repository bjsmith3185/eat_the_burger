var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burger_controller.js");

var app = express();

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({
  extended: true
}))



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(routes);

var PORT = 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  console.log("Server listening on: http://localhost:" + PORT);
});


app.get("/", function(req,res) {
  res.render("index")
})
