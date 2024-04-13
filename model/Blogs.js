const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    tittle:{
        type:String,
        required:true,
        maxLength:50,
    },
    description:{
       type:String,
       required:true,
       maxLength:100,
    },
    createdAt:{
        type:Date,
        default:Date.now(),

    },

    updatedAt:{
        type:Date,
        default:Date.now()
    },

})

module.exports = mongoose.model("Blogs",blogSchema);
