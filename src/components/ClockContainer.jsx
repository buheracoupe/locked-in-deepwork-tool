import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeSplit } from '../Redux/slices/currentSplitSlice'
import { useEffect, useState } from 'react';
import { toggleTimer, toggleSwitch } from '../Redux/slices/timerSlice';
import useSound from 'use-sound';
import endSound from "../Assets/sounds/end.mp3"
import startSound from "../Assets/sounds/start.mp3"

function ClockContainer() {
    const [playEnd] = useSound(endSound)
    const [playStart] = useSound(startSound)
    
    const dispatch = useDispatch();
    const currentSplit = useSelector(state => state.currentSplitSlice.value);
    const userFocusTime = useSelector(state => state.settings.focusMinutes);
    const userRestTime = useSelector(state => state.settings.restMinutes);
    const timerState = useSelector(state => state.timer.timerRunning );
    const switchState = useSelector(state => state.timer.timerSwitch);
    const [totalSeconds, setTotalSeconds] = useState(0)
    const [displayTime, setDisplayTime] = useState({})

    useEffect(()=>{
       if(switchState === "off"){
        if(currentSplit === "focus"){
            setDisplayTime({
                minutes: userFocusTime, seconds: "00"
            })
        }else{
            setDisplayTime({
                minutes: userRestTime, seconds: "00"
            })
        }
       }

    }, [currentSplit, switchState, userFocusTime, userRestTime])
    

    useEffect(() =>{
        if(currentSplit === "focus"){
            setTotalSeconds(userFocusTime*60)
        }else{
            setTotalSeconds(userRestTime*60)
        }
    }, [currentSplit, userFocusTime, userRestTime])

    useEffect(()=> {
        const minutesRemaining = Math.floor(totalSeconds/60)
        let secondsRemaining = Math.floor(totalSeconds%60)
        if(secondsRemaining < 10){
            secondsRemaining = `0${secondsRemaining}`
        }
        let intervalId
        if(totalSeconds >= 0){
        if(timerState && switchState === "on"){
           intervalId = setInterval(() => {
            setDisplayTime({
                minutes: minutesRemaining,
                seconds: secondsRemaining
            })
            document.title = `Timer ${minutesRemaining}:${secondsRemaining}`
            setTotalSeconds(totalSeconds - 1)
           },1000)  
        }}else{
            currentSplit === "focus"? setTotalSeconds(userFocusTime*60) : setTotalSeconds(userRestTime*60)
            dispatch(toggleTimer(false))
            dispatch(toggleSwitch("off"))
            playEnd()
        }

        return () => clearInterval(intervalId)
    }, [timerState, totalSeconds, switchState])


  return (
    <div className='style-container h-[500px] w-[500px] mx-auto mt-4 rounded-md flex flex-col
                    p-4 justify-around items-center bg-secondaryDark'>
        <div>
        <button
         onClick={() =>{
                dispatch(changeSplit("focus"))
                dispatch(toggleSwitch("off"))
                dispatch(toggleTimer(false))
         }}

         className={currentSplit === "focus" ? "bg-white text-primaryDark p-2 font-semibold w-24 text-xl":
                                     "bg-none text-white opacity-70 p-2 font-semibold w-24 text-xl"}>Focus</button>
        <button 
        onClick={() => {
                dispatch(changeSplit("rest"))
                dispatch(toggleSwitch("off"))
                dispatch(toggleTimer(false))
        }}
        className={currentSplit === "rest" ? "bg-white text-primaryDark p-2 font-semibold w-24 text-xl":
            "bg-none text-white opacity-70 p-2 font-semibold w-24 text-xl"
         }>Rest</button>
        </div>
        <div className='text-white text-8xl flex items-center justify-center gap-1 md:text-9xl w-[350px] text-center font-semibold'>
            <p>{displayTime.minutes}:</p>
            <p className='w-32'>{displayTime.seconds}</p>
        </div>
        <div
        onClick={
           () => {
            dispatch(toggleSwitch("on"))
            dispatch(toggleTimer(!timerState))
            playStart()
           }
        } 
        className="buttons">
            <button className='bg-white text-secondaryDark p-2 font-semibold mx-auto w-36 text-2xl md:text-3xl rounded-md'>
                {timerState && switchState === "on"? "Pause": "Start"}
            </button>
        </div>
    </div>
  )
}

export default ClockContainer