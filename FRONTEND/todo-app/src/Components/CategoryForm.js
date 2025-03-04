import { useState } from "react"
import axios from "axios"
export default function CategoryForm({categoryDispatch}){

    const [name,setName] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            name:name
        }
        axios.post("http://localhost:4000/category",formData)
            .then((response)=>{
                console.log(response.data)
                const result = response.data
                categoryDispatch({type:"addCategory",payload:result})
            })
            .catch((err)=>{
                console.log(err)
            })


        setName("")

    }
    return (
        <div >
            <h3>Add Category</h3>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <label>Name:</label>
                <input type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input type="submit" className="btn"/>
            </form>
        </div>
    )
}