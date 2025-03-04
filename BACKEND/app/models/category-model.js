import {Schema,model} from "mongoose";

const categorySchema = new Schema({
    name:String
},{timestamps:true})

const Category = model('categories',categorySchema)

export default Category