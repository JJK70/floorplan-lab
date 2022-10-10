import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"

function FloorPlan(props) {
  return (
    <div id="floorplan">
      <Bedroom bedNum='1'/>
      <Kitchen />
      <Bath size='Full'/>
      <LivingRoom />
      <Bedroom bedNum='2'/>
      <Bath size='Half'/>
      <Bedroom bedNum='3'/>
    </div>
  )
}



export default FloorPlan


