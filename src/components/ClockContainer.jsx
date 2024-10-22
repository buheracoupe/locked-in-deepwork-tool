import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeSplit } from '../Redux/slices/currentSplitSlice'

function ClockContainer() {
    const dispatch = useDispatch();
    const currentSplit = useSelector(state => state.currentSplitSlice.value);

  return (
    <div className='style-container h-[500px] w-[500px] mx-auto mt-4 rounded-md flex flex-col p-4 justify-around items-center bg-secondaryDark'>
        <div>
        <button
         onClick={() => dispatch(changeSplit("focus"))}
         className={currentSplit === "focus" ? "bg-white text-primaryDark p-2 font-semibold w-24 text-xl":
            "bg-none text-white opacity-70 p-2 font-semibold w-24 text-xl"}>Focus</button>
        <button 
        onClick={() => dispatch(changeSplit("rest"))}
         className={currentSplit === "rest" ? "bg-white text-primaryDark p-2 font-semibold w-24 text-xl":
            "bg-none text-white opacity-70 p-2 font-semibold w-24 text-xl"
         }>Rest</button>
        </div>
        <div className="time">
            <p className='text-white text-8xl md:text-9xl text-center font-semibold'>45:00</p>
        </div>
        <div className="buttons">
            <button className='bg-white text-secondaryDark p-2 font-semibold mx-auto w-36 text-2xl md:text-3xl rounded-md'>Start</button>
        </div>
    </div>
  )
}

export default ClockContainer