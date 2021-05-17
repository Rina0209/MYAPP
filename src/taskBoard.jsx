import React from 'react';

class taskBoard extends React.Component{
    constructor(){
        super()
        this.state = {
            taskList:[],
            value: "",
        }
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }

    addTask(){
        this.setState({
            taskList:this.state.taskList.concat(this.state.value)
        })
    }
    render(){
        return( 
            <div>
                <div>
                    <h1>タスクリスト</h1>
                    <input type="text" value={this.state.value} onChange={e => this.handleChange(e)} />
                    {/* eはイベントという意味。 中身が変わったときにプロパティ値として表示する*/}
                    {/* onClickが行われたときに、handleChangeイベントを呼びますよ。その時は、イベントの各種プロパティを全部渡して、
                     その中で、target.valueの中身をsetstateの中で書き換えてあげるよ。という意味*/}
                    <button onClick={() => this.addTask()}>追加</button>
                    {/* <p>{this.state.value}</p> */}
                    {/* pタグの中身は、state.valueに書いたことsetstateで書き換えたことを表示してねという意味 */}
                </div>
                <div>
                    <ul>
                        {this.state.taskList.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default taskBoard;
