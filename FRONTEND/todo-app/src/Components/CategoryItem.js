import { useContext } from "react"
import TodoContext from "../context/TodoConext"
import TodoItem from "./TodoItem.js"
import  "../style.css"
export default function CategoryItem(){
    const {category,todo} = useContext(TodoContext)
    return(
        <div>
            {category.map((ele)=>{
                return (
                    <>
                        <li key={ele._id} className="categoryItem">{ele.name}</li>
                        <ul style={{listStyleType:'none',margin:'1rem',padding:'0'}}>
                            <TodoItem {...ele}/>
                        </ul>
                    </>
                
                )
            })}
             
           
        </div>
    )
}