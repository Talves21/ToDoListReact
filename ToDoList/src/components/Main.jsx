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
                <p><bold>Chore:</bold> {props.listName}</p>
                <p><bold>Due:</bold> {props.time}</p>
                <br />
            </div>
            <div className="col-4 pt-5">
                <p><bold>Desc:</bold> {props.desc}</p>
            </div>
            <div className="col-2 pt-5">
                <button className='compButton'>Complete</button>
            </div>
        </div>

    )
}

export default Main