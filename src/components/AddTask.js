import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(true)

const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
        alert('Plese add a task')
        return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(true)
}


    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">  
            <form className="mt-4 mb-2" onSubmit={onSubmit}>
                <div className="d-flex justify-content-center">
                    <input className="form-control me-2 w-75" type="text" 
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}/> 
                </div>
                <div className="d-flex justify-content-center">
                    <input className="form-control me-2 w-75 mt-2" type="text" 
                    placeholder="Add Day & Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}/>
                </div>
                <div className="row mt-3">
                    <div className="col-2"></div>
                    <div className="form-check form-switch col-4 mt-1">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                            defaultChecked 
                            value={reminder}
                            onChange={(e) => setReminder(e.currentTarget.checked)}/>
                        <label className="form-check-label text-light" htmlFor="flexSwitchCheckChecked">Reminder</label>
                    </div>

                    
                    <button className="btn btn-outline-success col-4" type="submit">
                        Save Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTask
