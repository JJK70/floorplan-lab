function Bedroom(props) {
  return (
    <div id={`bed-${props.bedNum}`}>
      <h2>Bedroom {props.bedNum}</h2>
    </div>
  )
}

export default Bedroom