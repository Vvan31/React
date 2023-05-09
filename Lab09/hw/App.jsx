import React from 'react'
import { Cat} from 'react-kawaii'
import { useSelector, useDispatch } from 'react-redux'
import { 
  MOODS, 
  COLORS, 
} from './mood'
import { changeColor } from './slice/colorSlice'
import { changeMood } from './slice/moodSlice'
import { changeSize } from './slice/sizeSlice'

function App() {
  const currentMood = useSelector((state) => state.mood.mood)
  const currentColor = useSelector((state) => state.color.color)
  const currentSize = useSelector((state) => state.size.size)
  const dispatch = useDispatch()

  const handleMoodUpdate = (event) => {
    const mood = event.target.dataset.type
    dispatch(changeMood(mood))
  }

  const handleColorUpdate = (event) => {
    const color = event.target.dataset.type
    console.log(color);
    dispatch(changeColor(color))
  }

  const handleSizeUpdate = (event) => {
    if (event.target.innerText === "+") {
      dispatch(changeSize( 10))
    }else {
      console.log(currentSize);
      dispatch(changeSize( -10))
    }
  }

  return (
    <div className='App'>
      <Cat size={currentSize} mood={currentMood} color={currentColor} />
      <section>
        {Object.values(MOODS).map((mood) => (
          <button key={mood} data-type={mood} onClick={handleMoodUpdate}>
            {mood}
          </button>
        ))}
      </section>
      <section>
        {Object.values(COLORS).map((color) => (
          <button key={color} data-type={color} onClick={handleColorUpdate}>
            {color}
          </button>
        ))}
      </section>
      <section>
          <button key={"-"} onClick={handleSizeUpdate}>
            -
          </button>
          <button key={"+"} onClick={handleSizeUpdate}>
            +
          </button>
          
      </section>

    </div>
  )
}

export default App