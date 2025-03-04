import axios from "axios"
import FormContainer from "./Components/FormsContainer"
import "./style.css"
import { useReducer,useEffect } from "react"
import TodosContainer from "./Components/TodosContainer"
import TodoContext from "./context/TodoConext"

const categoryReducer = (state,action)=>{
  switch(action.type){
    case 'addCategory' :return [...state,action.payload]
    case 'setCategory' :return action.payload
  }
}

const todoReducer = (state,action)=>{
  switch(action.type){
    case 'addTodo' :return[...state,action.payload]
    case 'setTodo' :return action.payload
    case 'deleteTodo' :{const newarr = state.filter((ele)=>ele._id !== action.payload)
      return newarr
    }
  }
}

export default function App(){
  const [category,categoryDispatch] = useReducer(categoryReducer,[]) 
  const [todo,todoDispatch] = useReducer(todoReducer,[])
  console.log(category)
  // const fetchCategory = ()=>{
  //   axios.get('http://localhost:4000/category')
  //     .then((response)=>{
  //       const result = response.data
  //       console.log(result)
  //       categoryDispatch({type:'setCategory',payload:result})
  //     })
  //     .catch((err)=>{
  //       console.log(err.message)
  //     })
  // }

  useEffect(()=>{
    (category && axios.get('http://localhost:4000/category')
    .then((response)=>{
      const result = response.data
      console.log(result)
      categoryDispatch({type:'setCategory',payload:result})
    })
    .catch((err)=>{
      console.log(err.message)
    }))
  },[])



  useEffect(()=>{
    axios.get('http://localhost:4000/todo')
      .then((response)=>{
        const result = response.data
        console.log(result)
        todoDispatch({type:'setTodo',payload:result})
      })
      .catch((err)=>{
        console.log(err.message)
      })
},[])

  return (
    <div className="App">
      <h1 style={{display:"inline",fontSize:"3rem",color:"#27374D"}}>TODO APP.<p style={{display:"inline",fontSize:"1.5rem",color:"#27374D"}}>(From to-dos to ta-das!)</p></h1>
    
      <FormContainer className="FormContainer" categoryDispatch={categoryDispatch} todoDispatch={todoDispatch} category={category}/>
      <TodoContext.Provider value={{category,todo,todoDispatch}}>
        <TodosContainer/>
      </TodoContext.Provider>
     
    </div>
    
  )
  
}