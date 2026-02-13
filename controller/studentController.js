// file ada karana extension haku built in tool illada karana
import Student from "../models/studentSchema.js";

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


export const createStudent =async(req,res) =>{
 try {
    const data = req.body;
    const addStudent = await Student.create(data);
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
 
export const getStudent =async(req,res)=>{
    try {
        const studentData = await Student.find();
        res.status(200).json({
            success : true,
            message:"Data fetched Successfully",
            // create one extra key
            data : studentData
        })
    } catch (error) {
         res.status(500).json({
            success : false,
            message:"Error in fetching data ",
            
    })
}
}
// export default agudilla direct haku export const na eduru