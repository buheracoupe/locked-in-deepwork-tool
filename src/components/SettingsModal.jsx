import React from 'react'
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { toggleSettings, setTime } from '../Redux/slices/settingsSlice';
import { useForm } from 'react-hook-form';
import { IoCloseCircleSharp } from "react-icons/io5";
import { toggleSwitch } from '../Redux/slices/timerSlice';
import { toggleTimer } from '../Redux/slices/timerSlice';

function SettingsModal() { 
const {register, handleSubmit} = useForm();
const dispatch = useDispatch();
const isSettingsShowing = useSelector((state) => state.settings.settingsShowing)
const {focusMinutes, restMinutes} = useSelector((state) => state.settings)

if(!isSettingsShowing) return;

function onSubmit(data, event){
    event.preventDefault()
    dispatch(setTime(data))
    dispatch(toggleSettings(false))
    dispatch(toggleSwitch("off"))
    dispatch(toggleTimer(false))
}

  return (
    <form 
    onClick={(event) => event.stopPropagation()}
    onSubmit={handleSubmit(onSubmit)}
    className={isSettingsShowing? "relative" : "hidden"}>
        
    <div className=" bg-white shadow-slate-300  shadow-lg text-primaryDark rounded-md p-2 h-[400px] w-[400px] fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
    <IoCloseCircleSharp onClick={() => dispatch(toggleSettings(false))}
     className='absolute cursor-pointer text-4xl hover:text-primaryLight text-primaryDark top-2 right-3'/>
        <div className='flex text-3xl mb-4 gap-4 border-b-2 mx-auto border-secondaryDark justify-center py-3 w-[350px] items-center '>
            <MdOutlineSettingsSuggest className="text-5xl" />
            <h1 className='font-medium'>Settings</h1>
        </div>
        <div className=' flex flex-col text-lg gap-4 items-center'>
            <p>Timer (Minutes)</p>
            <div className="inputs flex gap-8">
                <div className='flex flex-col items-center gap-2'>
                <label htmlFor="focus-time">Focus Time:</label>
                <input
                    defaultValue={focusMinutes}
                    min={0}
                    id='focus-time'
                    {...register("focusTime")}
                    className='bg-[#e8d4c14f] focus:outline-secondaryDark placeholder:text-black w-20 text-center h-12 rounded-md'
                     type="number" />
                </div>
               <div className='flex flex-col items-center gap-2'>
               <label htmlFor="rest-time">Rest Time:</label>
                <input
                    defaultValue={restMinutes}
                    min={0}
                    id='rest-time'
                    {...register("restTime")}
                    className='bg-[#e8d4c14f] w-20 focus:outline-secondaryDark text-center placeholder:text-black h-12 rounded-md'
                    type="number" />
                </div>
                
            </div>
        </div>
        <button onClick={(event) => {
            
        }} 
        className='bg-secondaryDark px-2 py-1 text-lg absolute bottom-8 right-8 
         hover:bg-primaryLight hover:text-black text-white rounded-md'>Done</button>
    </div>
    </form>
  )
}

export default SettingsModal