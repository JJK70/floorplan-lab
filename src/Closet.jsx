function Closet(props) {
  return (
    <div className="closet" id={`closet-${props.closetNum}`}>
      <h2>Closet {props.closetNum}</h2>
    </div>
  )
}

export default Closet