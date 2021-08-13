import PropTypes from 'prop-types'
import { useState } from "react"


import AddTask from './AddTask'

const Header = ({title, onAdd}) => {
    const [clicked, setClicked] = useState(true)
    const [buttonText, setButtonText] = useState('Add')

    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">{title}</span>
                    <button className="navbar-toggler
                            btn btn-outline-dark" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent"
                            onClick={clicked ? () => { setClicked(false); setButtonText("Close")} : () => {setClicked(true); setButtonText('Add')}  }>
                                
                        <span>{buttonText}</span>
                    </button>
                    <AddTask onAdd={onAdd}/>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Traker'
}

Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header
