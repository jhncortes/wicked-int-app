const cors = require('cors');
const express = require('express');
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());


app.get("/test", (req, res) => {
    res.json({message: "This is a test"})
})

app.listen(port, () => {console.log("The server is on port " + port)});