import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
import express from "express"
import {checkSchema} from "express-validator"

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())

import configDB from "./config/DB.js"
import categoryCltr from "./app/controllers/category-cltr.js"
import categoryValidationSchema from "./app/validations/category-validation.js"
import idValidationSchema from "./app/validations/id-validation.js"
import todoCltr from "./app/controllers/todo-cltr.js"
import todoValidationSchema from "./app/validations/todo-validation.js"
configDB()




app.post('/category',checkSchema(categoryValidationSchema),categoryCltr.create)
app.get('/category',categoryCltr.list)
app.delete('/category/:id',checkSchema(idValidationSchema),categoryCltr.delete)
app.put('/category/:id',checkSchema(categoryValidationSchema),checkSchema(idValidationSchema),categoryCltr.update)


app.post('/todo',checkSchema(todoValidationSchema),todoCltr.create)
app.get('/todo',todoCltr.list)
app.delete('/todo/:id',checkSchema(idValidationSchema),todoCltr.delete)
app.put('/todo/:id',checkSchema(todoValidationSchema),checkSchema(idValidationSchema),todoCltr.update)

app.listen(port,()=>{
    console.log('server is running on port',port)
})