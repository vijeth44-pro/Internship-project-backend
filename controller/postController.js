import post from  "../models/postSchema.js"

export const createPost = async(req,res)=>{
    try {
        const {caption} = req.body;
        const image = req.file.filename;
        const userId = req.user.id
        console.log(userId)
        const addData = await post.create({
            caption:caption,
            image:image,
            user:userId
        })
        res.status(201).json({
        success:true,
        meassage:'Data added Successfully!',
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({
        success:false,
        meassage:'Error adding data !',
    })
}
}