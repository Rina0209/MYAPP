import React, { useState } from 'react';


const TaskBoard2 = ()　=> {
    const[taskList, setTaskList] = useState([]);
    const[value, setValue] = useState("");
    // useState("")という文の、()の中身はstateで定義したものの初期値。
    // ここだと、valueは配列ではないため、初期値は空白という意味。
    // taskLiskは、()内はから配列だよという意味で、[]を記載している。

    // this.state = {         クラスを使うとこうだが、useStateに書き換えると上になる。
    //         taskList:[],
    //         value: "",

    const handleChange = e => {
        const newValue = e.target.value;
        setValue(newValue);
        setValue(e.target.value);
        // this.setState({value: e.target.value})
        // setValueはnewValueだよと定義づけることで、上記を書き換えた。
    };

    const addTask = ()  => {
        const newTask = [...taskList, value]
        setTaskList(newTask);
        setValue("");
        // taskListを展開して、そこにvalueの値を足している。

        // setTaskList(newTask);
        // this.setState({
        //     taskList:this.state.taskList.concat(this.state.value)
        // この三行を書き換えた。
        // })
    }

    // render(){
    return( 
        <div>
             <div>
                 <h1>タスクリスト</h1>
                <input type="text" value={value} onChange={e => handleChange(e)} />
               
                <button onClick={addTask}>追加</button>
                {/* <p>{value}</p> */}
                </div>
                <div>
                <ul>
                    {taskList.map((task, index) => (
                        <li key={index}>{task}</li>                       
                     ))}
                </ul>
            </div>
        </div>
    )
    // }
}

export default TaskBoard2;
