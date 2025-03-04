import { validationResult } from 'express-validator'
import Todo from '../models/todo-model.js'

const todoCltr = {}

todoCltr.create =async (req,res)=>{
    const errors = validationResult(req)
    if(! errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const body = req.body
    try{
        const todo = await Todo.create(body)
        res.json(todo)
    }
    catch(err){
        console.log(err)
        res.status(500).json('something went wrong')
    }
}

todoCltr.list =async (req,res)=>{
    
    try{
        const todo =await Todo.find()
        res.json(todo)
    }
    catch(err){
        console.log(err)
        res.status(500).json('something went wrong')
    }
}

todoCltr.delete =async (req,res)=>{
    const errors = validationResult(req)
    if(! errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const id = req.params.id
    try{
        const todo =await Todo.findByIdAndDelete(id)
        res.json(todo)
    }
    catch(err){
        console.log(err)
        res.status(500).json('something went wrong')
    }
}

todoCltr.update =async (req,res)=>{
    const errors = validationResult(req)
    if(! errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const id = req.params.id
    const body = req.body
    try{
        const todo =await Todo.findByIdAndUpdate(id,body)
        res.json(todo)
    }
    catch(err){
        console.log(err)
        res.status(500).json('something went wrong')
    }
}


export default todoCltr