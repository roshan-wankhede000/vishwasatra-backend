import userModel from "../model/usermodel.js";
import jwt from "jsonwebtoken"

let userRegister = async (req, res) => {
    try {
        let { name, email, password, } = req.body
        let isuserExist = await userModel.findOne({ email })
        if (isuserExist) {
            return res.status(500).json({
                succeess: false,
                message: "user already Exist, Please log in"
            })
        }
        let newuser = await userModel.create({
            name, email, password
        })
        let token = jwt.sign({ id: newuser._id, email: newuser.email }, process.env.SECRET_KEY, { expiresIn: "1d" })
        return res.status(201).json({
            succeess: true,
            token: token,
            message: "Registration has been successfull."
        })
    } catch (error) {
        return res.status(500).json({
            succeess: false,
            message: "Registration failed",
            error: error
        })
    }
}

let userLogin = async (req, res) => {
    try {
        let { email, password, } = req.body
        let user = await userModel.findOne({ email })
        if (!user) {
            return res.status(500).json({
                succeess: false,
                message: "user not registred, Please register first!."
            })
        }
        if (user.password !== password) {
            return res.status(500).json({
                succeess: false,
                message: "user credintials are mismatch, please enter correct email and password"
            })
        }
        let token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: "1d" })
        return res.status(200).json({
            succeess: true,
            message: "Login Successfull.",
            token: token
        })
    } catch (error) {
        return res.status(500).json({
            succeess: false,
            message: "Login failed",
            error: error
        })
    }
}


export {
    userRegister,
    userLogin
}