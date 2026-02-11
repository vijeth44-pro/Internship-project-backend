import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
 name : {
    type : String,
    required :true
 },
 brand : {
    type : String,
    required :true
 },
description : {
    type : String,
    reuired : true
},
price : {
    type : Number,
    reuired : true
},
stock : {
    type : Number,
    reuired :true
},
image : {
    type : String,
    reuired : true
},
createdAt : {
    type : Date,
    required :true
},

})
const Product = mongoose.model("Product",productSchema)
export default Product;