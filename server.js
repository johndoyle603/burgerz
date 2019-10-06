let express = require("express");
let path = require("path");
let exphbs = require("express-handlebars");
let routes = require('./controllers/burgerz_controller.js');
let app = express();
let PORT = process.env.PORT || 3000;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "views/layouts/index.html"));
});


app.listen(PORT, () => {
    console.log('server listening on port 3000');
});