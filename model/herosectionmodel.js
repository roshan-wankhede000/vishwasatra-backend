import mongoose from "mongoose";


let herosectionShema = new mongoose.Schema({
    onebhk: {
        name: {
            type: String,
        },
        oldprice: {
            type: String
        },
        newprice: {
            type: String
        }
    },
    twobhk: {
        name: {
            type: String,
        },
        oldprice: {
            type: String
        },
        newprice: {
            type: String
        }
    },
    address: {
        type: String,
    }
    // userid: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "user"
    // }
}, {
    timestamps: true
})

let heroSectionModel = mongoose.model("herosection", herosectionShema)

export default heroSectionModel