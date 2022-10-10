import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"

function FloorPlan(props) {
  return (
    <div>
      <Bedroom />
      <Kitchen />
      <Bath />
      <Bedroom />
      <LivingRoom />
      <Bath />
      <Bedroom />

    </div>
  )
}

export default FloorPlan

