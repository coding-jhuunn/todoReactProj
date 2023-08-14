const PerItemRender = ({todoList,setTodoList,todoIndex})=>{
    
    const handleDelete=(e)=>{
        e.preventDefault();
        setTodoList(todoList.filter(item => item.id !==todoIndex.id));
    }
    
    return (
        <div>
            <h3>{todoIndex.name}</h3>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}


export default PerItemRender;