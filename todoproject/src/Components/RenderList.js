import PerItemRender from "./PerItemRender";

const RenderList = ({todoList,setTodoList}) =>{
    return (
        <div>
            {todoList.length<=0?"Empty List ":todoList.map((index=>
                <PerItemRender
                todoList={todoList}
                setTodoList={setTodoList}
                key={index.id}
                todoIndex= {index}
                ></PerItemRender>
            ))}
        </div>
    )
}

export default RenderList;