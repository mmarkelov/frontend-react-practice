import Task from "../../components/Task";

// eslint-disable-next-line react/prop-types
const List = ({tasks}) => {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            {tasks.map(task => (
                <Task key={task.id} title={task.title} description={task.description} date={JSON.stringify(task.date)} status={task.status}/>
            ))}
        </div>
    )
}

export default List;