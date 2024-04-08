const Blogs = require("../model/Blogs");


exports.createBlog = async(req,res)=>{
    try {
   const{title,description} = req.body;
    // Create new Blogs

    const response = await Blogs.create({title,description});
    res.status(200).json({
        success:true,
        data:res,
        message:"Succesfully Created",
    })
        
    } catch (error) {
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"internal network Problem",
            message:error.message,
        })
    }
}