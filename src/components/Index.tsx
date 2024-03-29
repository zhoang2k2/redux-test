import { useState } from "react"
import Button from "./Button"
import Todo from "./Todo"
import { connect } from "react-redux"
import { addItem, deleteItem } from "../redux/function"
import Table from "./Table"
import "./index.css"
import { bindActionCreators } from "redux"

function Index(props: any) {
  const [toDo, setToDo] = useState("")
  const handleChange = (e: any) => {
    setToDo(e.target.value)
  }
  const handleClick = () => {
    console.log("props.addItem", props.addItem)

    props.addItem({ id: Math.floor(Math.random() * 1000), content: toDo })
    console.log(toDo)
    setToDo("")
  }
  console.log("todoItem", props.todoItem)

  return (
    <div className="container">
      <div className="form">
        <Todo handleChange={handleChange} value={toDo} />
        <Button name="submit" className="add-btn" handleClick={handleClick} />
      </div>
      <div className="to-do-list">
        <Table todoItem={props.todoItem} />
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  todoItem: state.todoItem,
})

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      addItem,
      deleteItem,
    },
    dispatch,
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
