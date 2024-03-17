import "./input.css"

interface TodoProps {
  value: any
  handleChange: (e: any) => void
}

function Todo({ handleChange, value }: TodoProps) {
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Add task here"
      />
    </>
  )
}

export default Todo
