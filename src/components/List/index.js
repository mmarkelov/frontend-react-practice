import Task from "../../components/Task";
import PropTypes from "prop-types";
import {TASK_STATUSES} from "../../const";

const List = ({tasks}) => {
    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} {...task}/>
            ))}
        </div>
    )
}

List.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.oneOf(TASK_STATUSES)
    }))
}

export default List;
