import express from "express"
import { userLogin, userRegister } from "../controller/usercontroller.js"
import authmiddleware from "../middleware/authmiddleware.js"
import { addherosection, getherosection, updateherosection } from "../controller/herosectioncontroller.js"
import { getAllTexts, updateText } from "../controller/aboutsectioncontroller.js"

let router = express.Router()
router.post("/userregister", userRegister)
router.post("/userlogin", userLogin)
// router.post("/addherosection", authmiddleware, addherosection)
router.get("/getherosection", getherosection)
router.put("/updateherosection", updateherosection)
router.put("/adminabout", updateText)
router.get("/getAllTexts",getAllTexts)

export default router 