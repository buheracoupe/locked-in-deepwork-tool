import React from 'react'
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { useSelector } from 'react-redux';
function SettingsModal() {
const isSettingsShowing = useSelector((state) => state.settings.settingsShowing)


  return (
    <form  onClick={event => event.stopPropagation()}
    className='relative'>
    <div className=" bg-white shadow-slate-300  shadow-lg text-primaryDark rounded-md p-2 h-[400px] w-[400px] fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className='flex text-3xl mb-4 gap-4 border-b-2 mx-auto border-secondaryDark justify-center py-3 w-[350px] items-center '>
            <MdOutlineSettingsSuggest className="text-5xl" />
            <h1 className='font-medium'>Settings</h1>
        </div>
        <div className=' flex flex-col text-lg gap-4 items-center'>
            <p>Timer (Minutes)</p>
            <div className="inputs flex gap-8">
                <div className='flex flex-col items-center gap-2'>
                <label htmlFor="focus-time">Focus Time:</label>
                <input min={0} id='focus-time' className='bg-[#e8d4c14f] w-20 text-center h-12 rounded-md' type="number" />
                </div>
               <div className='flex flex-col items-center gap-2'>
               <label htmlFor="rest-time">Rest Time:</label>
                <input min={0} id='rest-time' className='bg-[#e8d4c14f] w-20 text-center h-12 rounded-md' type="number" />
               </div>
                
            </div>
        </div>
        <button onClick={(event) => event.preventDefault()} 
        className='bg-secondaryDark px-2 py-1 text-lg absolute bottom-8 right-8  hover:bg-primaryLight hover:text-black text-white rounded-md'>Done</button>
    </div>
    </form>
  )
}

export default SettingsModal