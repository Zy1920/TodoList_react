import React from "react";
import "./css/todoItem.css"

class TodoItem extends React.Component{
    render(){
        return(
            <li className="todo-item">
                <span className="item-name">{this.props.val}</span>
                <span className="item-remove" onClick={this.handleClick}>x</span>
            </li>
        )
    }

    handleClick=()=>{
        this.props.onDelete(this.props.index)
    }
}

export default TodoItem