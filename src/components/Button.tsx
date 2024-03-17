import "./button.css"

interface ButtonProps {
  name: string
  className?: string
  handleClick: (e: any) => void
}

function Button({ ...props }: ButtonProps) {
  return (
    <>
      <button className={props.className} onClick={props.handleClick}>
        {props.name}
      </button>
    </>
  )
}

export default Button
