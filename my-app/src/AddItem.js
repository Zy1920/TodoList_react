import React from "react";
import "./css/addItem.css"

class  AddItem extends React.Component{
    render(){
        return(
            <form onSubmit={this.handleAdd} className="add-item">
                <input type="text" ref={(input) => this.inputNode = input}/>
                <input type="submit" value="添加"/>
            </form>
        )
    }

    handleAdd=(e)=>{
        e.preventDefault()
        console.log(this.inputNode.value)
        this.props.onInputChange(this.inputNode.value)
        this.inputNode.value=""
    }
}

export default AddItem;