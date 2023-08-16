

import shortid from "shortid";
import style from './style.module.css';

const Form = ({itemTodo,setItemTodo,todoList,setTodoList})=>{
    
    
    const handleChangeInput = (e)=>{
        setItemTodo(e.target.value);
    }
    const handleAddTodo = (e)=>{
        e.preventDefault();
        setTodoList([...todoList,{name:itemTodo,id:shortid.generate()}])
        setItemTodo("");
        
    }
    
    return (
        <div className={style.divForm}>
            <form onSubmit={handleAddTodo}>
                <label>Item: </label>
                <input  placeholder="Input Here" type="text" onChange={handleChangeInput} value={itemTodo}></input>
                <button className={style.formbtn} >ADD</button>
            </form>
        </div>
    )
}

export default Form;