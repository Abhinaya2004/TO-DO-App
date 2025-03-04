import {Schema,model} from "mongoose"

const todoSchema = new Schema({
    todo:String,
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    },
    isChecked:Boolean
},{timestamps:true})

const Todo = model('todos',todoSchema)

export default Todo