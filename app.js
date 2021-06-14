
const express = require('express')

const app = express()
var items = ["buy food", "cook food", "eat food"];
var workItems = [];
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"))


app.get("/", (req, res) => {
 var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 var today = new Date();
 var day = today.toLocaleDateString("en-US", options)



 res.render("list", { title: day, newItems: items })
})

app.get("/work", (req, res) => {
 res.render("list", { title: "work", newItems: workItems })
})

app.post("/", function (req, res) {

 var item = req.body.item;
 if (req.body.button === "work") {
  workItems.push(item)
  res.redirect("/work")
 }
 else {
  items.push(item);
  res.redirect("/")
 }
});



app.listen(4000, () => {
 console.log("hello world i am new")
})