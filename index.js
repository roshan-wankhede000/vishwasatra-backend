import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import conndectDB from "./db/db.js"
import router from "./route/router.js"
dotenv.config()

let app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(("/uploads"), express.static("uploads"))
app.use("/api", router)

let port = process.env.PORT || 8000

app.listen(port, () => {
    conndectDB(process.env.MONGO_URL)
    console.log(`server is running on port ${port}`);
})

