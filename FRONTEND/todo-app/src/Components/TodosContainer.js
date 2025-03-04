import CategoryItem from "./CategoryItem.js"
import TodoItem from "./TodoItem.js"
export default function TodosContainer(){
    
    return(
        <>
            <h2 style={{color:'#27374D',fontSize:"30px"}}>Listing Todos:</h2>
            <ul style={{listStyleType:"none",margin:'0',padding:'0'}}> 
                <CategoryItem/>
            </ul>
        </>
    )
}