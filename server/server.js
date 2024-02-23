// Budget API

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const budgetaa = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 33
        },
        {
            title: 'Rent',
            budget: 50
        },
        {
            title: 'Grocery',
            budget: 90
        },
    ]
};
app.use("/",express.static("public"));
app.use( cors() );

const budget = require("./data.json");
console.log(budget)

app.get("/hello", (req,res) => {
    res.send("Hello Abinaya");
})

app.get("/budget", (req,res) => {
    res.json(budget);
})

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});