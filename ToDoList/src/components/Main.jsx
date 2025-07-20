import toDoData from '../ToDoListData'
import {useState} from 'react'



function Main() {
    
    return(
        <div className="row">
            <div className="col-12 text-center">
                <h1>To Do List</h1>
                <br />
                <br />
            </div>
            <div className="col-12 text-center">
                <h3>Activities</h3>
            </div>
            <div className="col-12">
                <Data />
            </div>
        </div>
    )
}

function Data() {

    const listData = toDoData.map((currentData) => {return <ItemData listName = {currentData.name} desc = {currentData.description} time = {currentData.timeDue} />})

    return(
        <div className="row itemData">
            {listData}
        </div>
    )
}

function ItemData(props) {
    
    return (
        <div className="row">
            <div className="col-6">
                <br />
                <p>Chore: {props.listName}</p>
                <p>Time Due: {props.time}</p>
                <br />
            </div>
            <div className="col-4">
                <br />
                <p>Desc: {props.desc}</p>
            </div>
            <div className="col-2">
                <br />
                <button className='compButton'>Complete</button>
            </div>
        </div>

    )
}

export default Main