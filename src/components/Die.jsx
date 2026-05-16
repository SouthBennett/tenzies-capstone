export default function Die( props ) {
  return (
    <>
      <button 
        onClick={() => props.hold(props.id)} 
        style={{backgroundColor : props.isHeld ? '#59E391' : '#f3f6f4'}} 
        aria-pressed={props.isHeld}
        aria-label={`Die with a value of ${props.value},
        ${props.isHeld ? "held" : "not held"}`}
      >{props.value}</button>
    </>
  )
}