

import shortid from "shortid";


const Form = ({itemTodo,setItemTodo,todoList,setTodoList})=>{
    
    
    const handleChangeInput = (e)=>{
        setItemTodo(e.target.value);
    }
    const handleAddTodo = (e)=>{
        e.preventDefault();
        setTodoList([...todoList,{name:itemTodo,id:shortid.generate()}])
        console.log(todoList)
        
    }
    
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label>Todo Name: </label>
                <input type="text" onChange={handleChangeInput}></input>
                <button>ADD</button>
            </form>
        </div>
    )
}

export default Form;