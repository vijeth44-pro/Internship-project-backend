import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
   rollno : {
        type : String,
        required : true
    },
     name : {
        type : String,
        required : true
    },
     email : {
        type : String,
        required : true
    },
     college : {
        type : String,
        required : true
    },
     course : {
        type : String,
        required : true
    }

})
const Student = mongoose.model("Student",studentSchema)
export default Student;