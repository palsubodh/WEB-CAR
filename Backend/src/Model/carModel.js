const mongoose = require('mongoose')
let ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({

    carname: {
        type: String,
        //required: true,
        trim: true
    },
    brandname: {
        type: String,
        //required: true,
        trim: true
    },
    userId: {
        ref :"user",
        type:ObjectId
    },
    km:{
        type :Number,
        //required:true
    },
    image:{
        type:String,
        //required:true
    }  
}, {
    timestamps: true
})



module.exports = mongoose.model('Cars', userSchema)