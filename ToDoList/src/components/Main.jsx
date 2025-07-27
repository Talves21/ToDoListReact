import toDoData from '../ToDoListData'
import {useState} from 'react'



function Main() {
    
    return(
        <div className="row">
            <div className="col-12 text-center">
                <h1>To Do List</h1>
            </div>
            <div className="col-12 text-center pt-5">
                <h3>Activities</h3>
            </div>
            <div className="col-12">
                <Data />
            </div>
        </div>
    )
}

function Data() {

    const [showInput, setShowInput] = useState(true);

    return(
        <div className="row itemData">
            <div className="col-6">
                <br />
                <p><bold>Chore:</bold> <input type="text" /></p>
                <p><bold>Due:</bold> <input type="text" /></p>
                <br />
            </div>
            <div className="col-4 pt-5">
                <p><bold>Desc:</bold> <input type="text" /></p>
            </div>
            <div className="col-2 pt-5">
                <button onClick={() => setShowInput(false)} className='compButton'>Complete</button>
            </div>
        </div>

    )
}


export default Main