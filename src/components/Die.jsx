export default function Die( props ) {
  return (
    <>
      <button 
        onClick={() => props.hold(props.id)} 
        style={{backgroundColor : props.isHeld ? '#59E391' : '#f3f6f4'}} 
      >{props.value}</button>
    </>
  )
}