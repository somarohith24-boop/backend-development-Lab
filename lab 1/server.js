const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my Node.js and Express server!");
});

app.get("/about", (req, res) => {
    res.json({
        name: "Soma Rohith Reddy",
        section: "YOUR SECTION"
    });
});

app.get("/time", (req, res) => {
    res.json({
        currentDateTime: new Date()
    });
});

app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});