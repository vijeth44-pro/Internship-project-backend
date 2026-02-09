// file ada karana extension haku built in tool illada karana
import User from "../models/userSchema.js";

// stucture of logic
// 1.export const functionName = async(req,res)=>{
    // try {
    // access data from frontend(only for create & update)
    // execute mongodb function "(await schema.mongoFunction(data))"
    // send response to frontend

    // } catch (error) {
        // send error in response
    // }
    // }


export const createUser =async(req,res) =>{
 try {
    const data = req.body;
    const addUser = await User.create(data);
    res.status(200).json({
        success: true,
        message:"Data added Successfully"
    })
 } catch (error) {
     res.status(500).json({
        success: false,
        message:"Error in adding data"
    })
 }
}

// export default agudilla direct haku export const na eduru