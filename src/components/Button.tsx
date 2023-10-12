interface Props {
    children: string;
    onClick: () => void; //why?
    color?: "primary" | "secondary" | "danger" | "success"; //to set it only to bootstrap classes, otherwise it won't compile
}
function Button({children, onClick, color = "primary"} : Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button