import style from './style.module.css';

const PerItemRender = ({todoList,setTodoList,todoIndex})=>{
    
    const handleDelete=(e)=>{
        e.preventDefault();
        setTodoList(todoList.filter(item => item.id !==todoIndex.id));
    }
    
    return (
        <div className={style.renderItemDiv}>
            <div className={style.itemNameDiv}>
                <label>{todoIndex.name}</label>
            </div>
            <div className={style.itemBtnDiv}>
                <button className={style.formbtn} onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}


export default PerItemRender;