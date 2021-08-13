const Task = ({key, task, onDelete, onToggle}) => {
    return (
            <div className="card my-3 " key={key} onDoubleClick={() => onToggle(task.id)}>
                        <div className="card-header">
                            <h3 className="mb-1">
                                {task.text}
                            </h3>
                            <p className={`text-sm text-warning mb-0 
                            ${task.reminder ? '' : 'd-none'}`}>
                                Reminder
                            </p>
                        </div>
                <div className="card-body row">
                    <div className="col-10">
                        <p>{task.day}</p>              
                    </div>
                    <div className="col 2 posision-relative">
                        <h5>
                            <i className="bi bi-x-circle 
                            position-absolute bottom-0 end-0
                            py-2 pe-2 text-danger"
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Delete this Task"
                            onClick={() =>onDelete(task.id)}
                            ></i> 
                        </h5>                        
                    </div>
                </div>
            </div>
    )
}

export default Task
