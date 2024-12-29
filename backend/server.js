// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require('dotenv');
// const cors = require('cors');
// const newsRoutes = require('./routes/newsRoutes.js');
// const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const newsmodel_1 = require("./models/news.js");

// const newsmodel_1 = require("./models/newsModel.js");

// app.get("/", (req, res) => {
//     res.json({ name: "chandan" });
// });

// app.post("/api/addnews", async (req, res) => {
//     try {
//         const news = await newsmodel_1.create(req.body);
//         res.status(200).json(news);
//         console.log(req.body);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.get("/api/news", async (req, res) => {
//     try {
//         const news = await newsmodel_1.find({});
//         res.status(200).json(news);
//         console.log(req.body);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.get("/api/news/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const news = await newsmodel_1.findById(id);
//         if (!news) {
//             return res.status(404).json({ Message: "News not found" });
//         }
//         res.status(200).json(news);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.put("/api/news/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const news = await newsmodel_1.findByIdAndUpdate(id, req.body, { new: true });
//         if (!news) {
//             return res.status(404).json({ Message: "News not found" });
//         }
//         res.status(200).json(news);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.delete("/api/news/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const news = await newsmodel_1.findByIdAndDelete(id);
//         if (!news) {
//             return res.status(404).json({ Message: "News not found" });
//         }
//         res.status(200).json("Deleted");
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log("Connected to MongoDB");
//     })
//     .catch((error) => {
//         console.error("Error connecting to MongoDB:", error.message);
//     });

// const PORT = process.env.PORT || 5001; // Changed port to 5001
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
const newsRoutes = require('./routes/newsRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const newsmodel_1 = require("./models/newsModel");

app.get("/", (req, res) => {
    res.json({ name: "chandan" });
});

app.post("/api/addnews", async (req, res) => {
    try {
        const news = await newsmodel_1.create(req.body);
        res.status(200).json(news);
        console.log(req.body);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/api/news", async (req, res) => {
    try {
        const news = await newsmodel_1.find({});
        res.status(200).json(news);
        console.log(req.body);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get("/api/news/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const news = await newsmodel_1.findById(id);
        if (!news) {
            return res.status(404).json({ Message: "News not found" });
        }
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.put("/api/news/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const news = await newsmodel_1.findByIdAndUpdate(id, req.body, { new: true });
        if (!news) {
            return res.status(404).json({ Message: "News not found" });
        }
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.delete("/api/news/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const news = await newsmodel_1.findByIdAndDelete(id);
        if (!news) {
            return res.status(404).json({ Message: "News not found" });
        }
        res.status(200).json("Deleted");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
    });

const PORT = process.env.PORT || 5001; // Changed port to 5001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});