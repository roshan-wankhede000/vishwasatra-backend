import heroSectionModel from "../model/herosectionmodel.js";
import userModel from "../model/usermodel.js";

let addherosection = async (req, res) => {
    try {
        let { id } = req.user.decoded
        let user = await userModel.findOne({ _id: id })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorised user"
            })
        }
        let { onebhk, twobhk, address } = req.body

        let herosection = await heroSectionModel.create({
            onebhk, twobhk, address
        })

        return res.status(201).json({
            success: true,
            message: "data added successfully.",
            herosection: herosection
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "server error occured try again",
            error: error
        })
    }
}


let getherosection = async (req, res) => {
    try {
        let herosection = await heroSectionModel.find()

        return res.status(200).json({
            message: "data fetched",
            success: true,
            herosection: herosection
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "server error occured try again",
            error: error
        })
    }
}

let updateherosection = async (req, res) => {
    try {

        let { onebhk, twobhk, address } = req.body;

        let updatedData = await heroSectionModel.findOneAndUpdate(
            {},   // update first document found
            { onebhk, twobhk, address },
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Data updated successfully",
            herosection: updatedData
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Server error occurred",
            error: error.message
        });
    }
};

export { addherosection, getherosection, updateherosection }