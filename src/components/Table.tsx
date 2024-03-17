interface TableProps {
  todoItem: any
}

function Table({ todoItem }: TableProps) {
  return (
    <ul>
      {todoItem &&
        todoItem.map((item: any) => {
          return <li key={item.id}>{item.content}</li>
        })}
    </ul>
  )
}

export default Table
