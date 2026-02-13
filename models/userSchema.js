import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    phone:{
        type : String,
        required : true
    }
    })

    const User = mongoose.model('User', userSchema);
export default User;

//step 1: import mongoose
//step 2: create a schema using mongoose.Schema
//step 3: inside the schema, define the fields and their types and whether they are required or not.
//step 4: create one variable and assign it to mongoose.model,("collection name", schema name)
//step 5: export the variable using export default variable name.