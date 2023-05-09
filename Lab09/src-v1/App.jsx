import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchData } from './redux/middleware/api'

import DrinkInventory from "./container/DrinkInventory"
import SnackInventory from "./container/SnackInventory"

import './App.css'

export default function App() {
  const isDataFetched = useSelector((state) => state.isDataFetched)
  const dispatch = useDispatch()

  console.log(isDataFetched)

  useEffect(() => {
    if (!isDataFetched) {
      dispatch(fetchData())
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