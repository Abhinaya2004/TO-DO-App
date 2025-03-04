import Category from "../models/category-model.js"
import { validationResult } from "express-validator"
const categoryCltr = {}

categoryCltr.create = async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const body = req.body
    try{
        const category = await Category.create(body)
        res.status(201).json(category)
    }
    catch(err){
        console.log(err)
        req.status(500).json('something went wrong')
    }
}

categoryCltr.list = async (req,res)=>{
    try{
        const category = await Category.find()
        res.json(category)
    }
    catch(err){
        console.log(err)
        req.status(500).json('something went wrong')
    }
}


categoryCltr.delete = async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const id = req.params.id
    try{
        const category = await Category.findByIdAndDelete(id)
        res.json(category)
    }
    catch(err){
        console.log(err)
        res.status(500).json('something went wrong')
    }
}

categoryCltr.update = async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    
    const id = req.params.id
    const body = req.body
    try{
        const category = await Category.findByIdAndUpdate(id,body)
        res.json(category)
    }
    catch(err){
        console.log(err)
        res.status(500).json('something went wrong')
    }
}
export default categoryCltr