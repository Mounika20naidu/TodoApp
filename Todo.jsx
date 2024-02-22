import React, { Fragment, useState } from 'react'
import './Todo.css'

const Todo = () => {
 let [data,setData]= useState()
 let[items,setItems]=useState([])
 let[editItem,setEditItem]=useState(null)


 let handleChange=(e)=>{
  setData(e.target.value)
 }
 let handleSubmit=(e)=>{
  e.preventDefault()
  if(data!=""){
    if (editItem!==null) {
     items[editItem]=data
     setEditItem(null)
    } else {
      setItems([...items,data])
    }
    
    setData("")
  }
 }

 let handleDelete=(id)=>{
   let updated=items.filter((val,ind)=>{
    return ind!=id
   })
   setItems((updated))
 }
let handleClear=()=>{
  setItems([])
}
let handleEdit=(id)=>{
  setData(items[id])
  setEditItem(id)
}

  return (
   <>
   <div className='div1'>
   <h1>To-Do-App</h1>
   <div className="form">
   <form action="" onSubmit={handleSubmit}>
    <input placeholder='Add items' type="text" value={data}  onChange={handleChange}/> 
    <button className='add' >{ (editItem!=null)? "UPDATE":"ADD ITEMS"}</button>
   </form>
   </div>

  <br /><br />
  {
    items.map((val,index)=>{
      return(
        <Fragment key={index}>
      <div className='values'>
      <span>{val}</span>
      <div className="but">
      <button onClick={()=>{handleEdit(index)}} className='edit'>EDIT</button>
        <button onClick={()=>{handleDelete(index)}} className='delete'>DELETE</button> 
      </div>
        <br /><br />
      </div>
        </Fragment>
      )
    })
  }
  
   <br /><br />
   <button onClick={handleClear}  className='clear'>CLEAR ALL</button>
   </div>
   </>
  )
}

export default Todo