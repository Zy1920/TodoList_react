import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from "./AddItem"
import TodoItem from "./TodoItem"
import "./css/index.css"
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom'
import About from "./About"

class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            todos:["吃饭","睡觉","打马贱贱"]
        }
    }

    handleAdd=(val)=>{
        let todos=this.state.todos
        todos.push(val)
        this.setState({
            todos:todos
        })
        console.log(todos)
    }

    handleDelete=(index)=>{
        let todos=this.state.todos
        todos.splice(index,1)
        this.setState({
            todos:todos
        })
        console.log(todos)
    }


    render(){


        const list=this.state.todos.map((val,index)=>{
            return <TodoItem key={index} val={val} index={index} onDelete={this.handleDelete}/>
        })
        console.log(list)

        let subtitle=null
        let length=this.state.todos.length
        if (length%2===0){
            subtitle=<h3>明日复明日，明日何其多({length})</h3>
        }else{
            subtitle=<h3>今日事今日毕({length})</h3>
        }


        return(
            <div className="todo-list">
                <Link to="/about">关于about</Link>
                <h2>备忘录</h2>
                {subtitle}
                {
                    length===0?
                        <p>恭喜你，任务全部完成</p>:  <ul>{list}</ul>
                }

               <AddItem onInputChange={this.handleAdd}/>
            </div>
        )
    }

}

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact={true} path="/" render={() => (<Todo showTitle={true} />)}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)

