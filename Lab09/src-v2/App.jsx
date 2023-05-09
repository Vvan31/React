import { useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'

import { fetchData, getDrinks, getSnacks } from './redux/middleware/api'

import DrinkInventory from "./container/DrinkInventory"
import SnackInventory from "./container/SnackInventory"

import './App.css'

export default function App() {
  const isDataFetched = useSelector((state) => state.isDataFetched)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isDataFetched) {
      // dispatch(fetchData())
      batch(() => {
        dispatch(getDrinks())
        dispatch(getSnacks())
      })
    }
  }, [])

  return (
    <main className="d-flex justify-content-center">

      <div className="container">
        <SnackInventory />
        <DrinkInventory />
      </div>
    </main>
  )
}