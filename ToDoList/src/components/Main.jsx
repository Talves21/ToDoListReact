import tododata from '../ToDoListData'

function Main() {
    
    return(
        <div className="row">
            <div className="col-12 text-center">
                <h1>To Do List</h1>
            </div>
            <div className="col-12">
                <OpenList />
                <br />
                <br />
                <Data />
            </div>
        </div>
    )
}

function OpenList() {

    function showData() {
        
    }

    return(
        <div className="row box">
            <div className="col-12 text-center">
                <button onClick={showData} className='listButton'>Open List</button>
            </div>
        </div>
    )
}

function Data() {


    return(
        <div className="row data">
            <div className="col-12 text-center">
                <h3>Activities</h3>
            </div>
        </div>
    )
}

export default Main