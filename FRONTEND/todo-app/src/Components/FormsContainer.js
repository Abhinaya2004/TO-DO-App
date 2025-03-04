import CategoryForm from "./CategoryForm";
import TodosForm from "./TodosForm";
import "../style.css"

export default function FormContainer({categoryDispatch,todoDispatch,category}){
    return(
        <div className="FormContainer">
            <CategoryForm categoryDispatch={categoryDispatch}/>
            <TodosForm category={category} todoDispatch={todoDispatch}/>
        </div>
    )
}