// blueprint or structure of data
// entire thing inside of object   is schema
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
})

// entire thing will be assigned in model user variable 
// user is the collection name in mongo db
// automatically adds s in mongo db
const User = mongoose.model("User",userSchema)
export default User;

// steps
// 1.import mongoose
// 2.create a variable & assign new mongoose.Schema({object})
// 3.inside object create all the keys & for those keys assign one object consist of blueprint of data
// 4.create one variable & assign mongoose .model("collectionName",schemaVariable)const User = mongoose.model("User",userSchema)
// 5.export the varable


// task product category schema
//