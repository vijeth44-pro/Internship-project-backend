// file ada karana extension haku built in tool illada karana
import User from "../models/userSchema.js";

// stucture of logic
// 1.export const functionName = async(req,res)=>{
// try {
// access data from frontend(only for create & update)
//access id from url (singleview, delete, update) ->req.params.routevalue
//validation 
// execute mongodb function "(await schema.mongoFunction(data))"
// send response to frontend

// } catch (error) {
// send error in response
// }
// }
//req.body -> to access data from front end


export const createUser = async (req, res) => {
  try {
    const { useremail, username, userphone} = req.body;
    const addUser = await User.create(
      {
        name:username,
        email:useremail,
        phone:userphone
      }
    );
    res.status(200).json({
      success: true,
      message: "Data added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in adding data",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const userData = await User.find();
    res.status(200).json({
      success: true,
      message: "Data fetched Successfully",
      // create one extra key
      data: userData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in fetching data ",
    });
  }
};
// export default agudilla direct haku export const na eduru

export const singleView = async (req, res) => {
  try {
    const id = req.params.diplomo; //passing id in url
    const userData = await User.findById(id); //mongodb function
    res.status(200).json({
      success: true,
      message: "I got the User Data",
      data: userData,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Error in fetching data!",
    })
  }
};

//delete
export const deleteUser = async(req,res) => {
    try {
        const id=req.params.id;
        const deleteData = await User.findByIdAndDelete(id); //mongodb function
        res.status(200).json({
            success:true,
            message:"Data deleted Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Error in deleting data"
        })
    }
};

//update
export const updateUser = async(req,res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updateData = await User.findByIdAndUpdate(id,data,{new:true}) //replace new data
        res.status(200).json({
            success:true,
            message:"Data updated Successfully",
            data:updateData
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Error in Updating data"
    })
}
}