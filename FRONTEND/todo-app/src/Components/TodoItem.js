import { useContext,useState } from "react"
import axios from "axios"
import "../style.css"
import TodoContext from "../context/TodoConext"
import ConfirmationModal from "./ConfiramtionModal"
export default function TodoItem({_id}){
    const {todo,todoDispatch} = useContext(TodoContext)
    const [showModal, setShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const newArr = todo.filter((ele)=>{return (ele.category === _id)})
    const handleCheck=(id)=>{
        const newarr = todo.map((ele) => {
            if (ele._id == id) {
              ele.isChecked = !ele.isChecked;
              return ele;
            } else {
              return ele;
            }
          });
          todoDispatch({type:'setTodo',payload:newarr})

    }

    const handleDelete = (id)=>{
        setItemToDelete(id);  // Set the item to delete
        setShowModal(true);    // Show the modal
    }   

    const confirmDelete=()=>{
        axios.delete(`http://localhost:4000/todo/${itemToDelete}`)
        .then((response)=>{
            const result = response.data
            todoDispatch({type:'deleteTodo',payload:result._id})
        })
        .catch((err)=>{
            console.log(err.message)
        })

        setShowModal(false)
    }

    return(
        <>
            {newArr.map((ele)=>{
                return(
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} className="todoItem">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <input type="checkbox" style={{height:"18px",width:"18px",marginRight:"6px"}} checked={ele.isChecked} onChange={()=>{handleCheck(ele._id)}}/>
                            {ele.isChecked?<del><li key={ele._id}>{ele.todo}</li></del>:<li key={ele._id}>{ele.todo}</li>}
                        </div>
                        
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <button className="update">Update</button>
                            <button className="delete" onClick={()=>{handleDelete(ele._id)}}>Delete</button>
                        </div>
                        
                    </div>
                )
               
            })}
            <ConfirmationModal show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={confirmDelete}/>
        </>
    )
}