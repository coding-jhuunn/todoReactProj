import PerItemRender from "./PerItemRender";
import style from './style.module.css';
const RenderList = ({todoList,setTodoList}) =>{
    return (
        <div className ={style.mainRenderDiv}>
            <div>
                {todoList.length<=0?
                    <label className={style.labelMessage}>Empty List</label>
                        :todoList.map((index=>
                        <PerItemRender
                        todoList={todoList}
                        setTodoList={setTodoList}
                        key={index.id}
                        todoIndex= {index}
                        ></PerItemRender>
                ))}
            </div>
        </div>
    )
}

export default RenderList;