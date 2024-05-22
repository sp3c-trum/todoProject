import { useState } from "react"

export default function Form(){
    const [newItem, setNewItem] = useState("")

    // function handleSubmit(e){
    //     e.preventDefault()
    
    //     setTodos(currentTodos =>{
    //       return [
    //         ...currentTodos,
    //         {id: crypto.randomUUID(), title: newItem, completed: false},
    //       ]
    //     })
    //     setNewItem("")
    //   }


    return (
        <form  onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
            <label htmlFor="zadanie">Nowe zadanie</label>
            <input type="text" id="zadanie" value={newItem} onChange={e => setNewItem(e.target.value)} />
            </div>
            <button className="btn">Dodaj</button>
        </form>
    )
}