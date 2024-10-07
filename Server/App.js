import express from "express";
import cors from "cors";
import "dotenv/config";
import multer from "multer";

const app = express();
const port = process.env.PORT || 4000

// middlewera
app.use(cors());
app.use(express.urlencoded({extends: true}));
app.use(express.json());
app.use("/", (req, res) => {
    res.send("Express App is running!")
})

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})
app.listen(port, () => {
    console.log("Server running on port: " + port)
})