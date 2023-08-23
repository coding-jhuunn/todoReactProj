
import shortid from "shortid";
import style from './style.module.css';
const Form = ({itemTodo,setItemTodo,todoList,setTodoList,error,setError,duplicate,setDuplicate})=>{
    
    const CheckIfExsts = (arr,value) =>{
        const found = arr.some(el => el.name === value);
        if(found){
            return true
        }
    }
    const handleChangeInput = (e)=>{
            setItemTodo(e.target.value);
            
    }
    const handleAddTodo = (e)=>{
        e.preventDefault();
        if(itemTodo.length===0){
            setError(true);
        }
        else if (itemTodo.length>0){
            if(CheckIfExsts(todoList, itemTodo)){
                setDuplicate(true);
            }
            else{
                setTodoList([...todoList,{name:itemTodo,id:shortid.generate()}]);
                setItemTodo("");
                setError(false);
                setDuplicate(false);
            }
        }  
    }
    return (
        <div className={style.divForm}>
            <form onSubmit={handleAddTodo} className={style.mainForm}>
                <div>
                    <input  placeholder="Input Name" 
                    type="text" 
                    onChange={handleChangeInput} 
                    value={itemTodo}>

                    </input>
                </div>
                {error&&itemTodo.length<=0?<label className={style.labelMessage} >Input should be not empty.</label>:
                duplicate?<label className={style.labelMessage}>Input is already existing. Try again.</label>:""}
                <div className={style.divBtn}>
                    <button className={style.formbtn} >ADD</button>
                </div>

                
            </form>
        </div>
    )
}

export default Form;