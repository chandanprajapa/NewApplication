const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("Hello from news routes");

    res.render("index", { text: "Home" });
    });

    const useRoutes = require("./routes/posts.js");
    const postRoutes = require("./routes/newsRoutes.js");
    app.use("/posts", useRoutes);
    app.use("/newsRoutes", postRoutes);
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });