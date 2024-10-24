import React from 'react'
import logo from "../Assets/Locked In logos and fonts/locked-in-high-resolution-logo-transparent.png"
import { CiCoffeeCup } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import TypedDisplay from './TypedDisplay';
import { useDispatch } from 'react-redux';
import { toggleSettings } from '../Redux/slices/settingsSlice';
import { LiaQuestionSolid } from "react-icons/lia";
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Header() {
  const dispatch = useDispatch();

  return (
    <div className="container grid place-content-center min-w-full bg-white relative py-2">
      <AnchorLink href='#faqSection'>
        <div className="faq absolute flex cursor-pointer right-8 items-center top-8">
          <p className='underline text-2xl text-secondaryDark'>FAQ</p>
          <LiaQuestionSolid className='text-secondaryDark text-3xl' />
        </div>
      </AnchorLink>
    <div className="logo-container mx-auto w-full bg-white flex gap-4">
      <img src={logo} className='h-28 object-contain' alt="Locked In logo" />
      <div className="flex gap-4 items-center">
        <div className="text-primary flex gap-2 flex-col">
        <p className='font-abel font-medium text-2xl'>Locked-In Productivity Tool</p>
        <TypedDisplay className="text-primary" />
        </div>
        
        <div className="buttons flex gap-2">
        <div onClick={() => dispatch(toggleSettings(true))} 
        className='bg-secondaryDark items-center text-white cursor-pointer w-28 hover:bg-primaryLight hover:text-black hover:font-semibold rounded-lg flex gap-2 justify-between p-2'>
        <IoSettings className='text-2xl' />
          <p>Settings</p>
          </div>
          <div className="coffee bg-secondaryDark cursor-pointer flex items-center w-[175px] hover:bg-primaryLight hover:text-black hover:font-semibold text-white rounded-lg gap-2 justify-between p-2">
            <CiCoffeeCup className=' text-2xl' />
            <p>Buy Me a Coffee</p>
          </div>
          </div>
      </div>
    </div>
    </div>
  
  )
}

export default Header