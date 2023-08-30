import "./style.css"

const List = ({ tasks, hideDoneTasks }) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id} className="list__item">
                <button className="list__button list__button--done">{task.done ? "✓" : ""
                }</button>
                <span className={task.done && hideDoneTasks ? "list__span--done" : ""}>{task.content} </span>
                <button className="list__button list__button--remove ">🗑</button>
            </li>
        ))}
    </ul >

);

export default List;