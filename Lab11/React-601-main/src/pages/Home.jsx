import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getData } from '../redux/middleware/api'

import DrinkInventory from "../container/DrinkInventory"
import SnackInventory from "../container/SnackInventory"

const Home = () => {
  const dispatch = useDispatch()

  const handleOrderByName = () => dispatch(getData(('name')))
  const handleOrderByQty = () => dispatch(getData(('quantity')))
  const handleOrderByRecent = () => dispatch(getData(('recent')))

  useEffect(() => {
    dispatch(getData('created_at'))
  }, [])

  return (
    <div className="container mx-auto px-4">
      <div className='flex justify-end items-center my-8'>
        <div className='flex items-center gap-5'>
          <span>Order by:</span>
          <div className="tabs tabs-boxed bg-transparent">
            <button
              className={`tab`}
              onClick={handleOrderByName}
            >Name</button>
            <button
              className={`tab`}
              onClick={handleOrderByQty}
            >Quantity</button>
            <button
              className={`tab tab-active`}
              onClick={handleOrderByRecent}
            >Recent</button>
          </div>
        </div>
      </div>
      <div className='prose max-w-none'>
        <SnackInventory />
        <DrinkInventory />
      </div>
    </div>
  )
}

export default Home