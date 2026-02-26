import jwt from "jsonwebtoken"

let authmiddleware = async (req, res, next) => {

    let token = req.headers.authorization.split(" ")[1]

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "you don't have access to this page."
        })
    }
    try {
        let decode = jwt.verify(token, SECRET_KEY)
        req.user = decode
        return next()
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unauthorised user"
        })
    }

}

export default authmiddleware