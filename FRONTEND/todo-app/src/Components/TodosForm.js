import axios from "axios"
import { useState } from "react"
export default function TodosForm({category,todoDispatch}){
    const [form,setForm] = useState({
            todo:'',
            category:''
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        const {todo,category} = form
        const formData = {
            todo:todo,
            category:category,
            isChecked:false
        }
        axios.post('http://localhost:4000/todo',formData)
            .then((response)=>{
                const result = response.data
                console.log(result)
                todoDispatch({type:'addTodo',payload:result})

            })
            .catch((err)=>{
                console.log(err.message)
            })

            setForm({ todo:'',
                category:''})
            
    }
    return(
        <div>
            <h3>Add a Todo</h3>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <label>Enter a Todo:</label>
                <input type="text" value={form.todo} onChange={(e)=>{setForm({...form,todo:e.target.value})}}/>
                <label>Select a Category:</label>
                <select value={form.category} onChange={(e)=>{setForm({...form,category:e.target.value})}}>
                    <option value="">select</option>
                    {category.map((ele)=>{
                        return <option value={ele._id}>{ele.name}</option>
                    })}
                </select>
                <input type="submit" className="btn"/>
            </form>

        </div>
    )
}