import { useState, useEffect, useContext, createContext, useRef } from 'react'
import { createContainer } from 'react-tracked'
import './App.css'

const useFlasher = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.classList.add('flash');
    setTimeout(() => {
      ref.current.classList.remove('flash');
    }, 300);
  });
  return ref;
};

const initialState = {
  count1: 0,
  count2: 0,
}

const useValue = () => useState(initialState)

const Context = createContext(null)

// const useGlobalState = () => {
//   const context = useContext(Context)
//   if (context === null) throw new Error('useGlobalState must be used within a Provider')
//   return context
// }

// const GlobalStateProvider = ({ children }) => (
//   <Context.Provider value={useValue()}>{children}</Context.Provider>
// )

const {
  useTracked: useGlobalState,
  Provider: GlobalStateProvider
} = createContainer(useValue)

const Counter = ({ name }) => {
  const [state, setState] = useGlobalState()
  const count = state[name] || 0

  const increment = () =>
    setState({ ...state, [name]: count + 1 })

  const decrement = () =>
    setState({ ...state, [name]: count - 1 })

  return (
    <div ref={useFlasher()}>
      {count}
      <button onClick={increment}>+ 1</button>
      <button onClick={decrement}>- 1</button>
    </div>
  )
}

export default function App() {
  return (
    <GlobalStateProvider>
      <h1>Counter 1</h1>
      <Counter name="count1" />
      <Counter name="count1" />

      <h1>Counter 2</h1>
      <Counter name="count2" />
      <Counter name="count2" />
    </GlobalStateProvider>
  )
}