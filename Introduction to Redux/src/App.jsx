import DrinkInventory from "./container/DrinkInventory"
import SnackInventory from "./container/SnackInventory"

function App() {
  return (
    <div className="container">
      <SnackInventory />
      <DrinkInventory />
    </div>
  )
}

export default App