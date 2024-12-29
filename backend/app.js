

const express = require("express");
const app = express();
const port = 3000;
 
app.use(express.json());

app.get("/" , (res , res) => {
    res.send("Hello World");
});

app.post("/post" , (req , res) => {
    const {id , name} = req.body;
    console.log(id , name);
    res.send("Post request");
});

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});