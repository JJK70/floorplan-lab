import Closet from "./Closet"


function Bedroom(props) {
  return (
    <div className="bedroom" id={`bed-${props.bedNum}`}>
      <span>Bedroom {props.bedNum}</span>
      <Closet />
    </div>
  )
}

export default Bedroom