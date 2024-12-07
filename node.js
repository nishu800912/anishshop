const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// Configure Multer for File Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Save files in 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// Serve Static Files
app.use(express.static("public"));

// Upload Route
app.post("/upload", upload.single("file"), (req, res) => {
    res.send("File uploaded successfully!");
});

// Download Route
app.get("/download", (req, res) => {
    const file = `${__dirname}/uploads/sample.pdf`;
    res.download(file);
});

// Start the Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
