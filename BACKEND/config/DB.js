import mongoose from "mongoose"
const configDB =async ()=>{
    try{
        const db = await mongoose.connect(process.env.DB_URL)
        console.log('connected to db')
    }
    catch(err){
        console.log(err)
    }
}

export default configDB