

import shortid from "shortid";
import style from './style.module.css';

const Form = ({itemTodo,setItemTodo,todoList,setTodoList,error,setError})=>{
    
  
    const handleChangeInput = (e)=>{
            setItemTodo(e.target.value);
    }
    const handleAddTodo = (e)=>{
        e.preventDefault();


        if(itemTodo.length===0){
            setError(true);
            console.log("none")
        }
        else if (itemTodo.length>0){
            setTodoList([...todoList,{name:itemTodo,id:shortid.generate()}]);
            setItemTodo("");
            setError(false);
        }

        
        
    }
    
    return (
        <div className={style.divForm}>
            <form onSubmit={handleAddTodo} className={style.mainForm}>
                <div>
                    <input  placeholder="Input Name" type="text" onChange={handleChangeInput} value={itemTodo}></input>
                </div>
                {error&&itemTodo.length<=0?<label>Input should be not empty</label>:""}
                <div>
                    <button className={style.formbtn} >ADD</button>
                </div>
              
            
            </form>
        </div>
    )
}

export default Form;