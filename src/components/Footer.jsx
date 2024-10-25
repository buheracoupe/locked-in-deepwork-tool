import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { changePage } from '../Redux/slices/simplePageSlice'
import { useSelector, useDispatch } from 'react-redux'

function Footer() {
const dispatch = useDispatch()
  return (
<div className="container bg-white items-center mt-8 p-4 flex flex-col gap-3">
    <div className="labels flex gap-2 text-secondaryDark text-xl ">
        <AnchorLink href='#header'>
            <p className="hover:text-primaryLight">Home</p>
        </AnchorLink>
        <a href='http://m.me/Darrell-Duri'>
            <p className="hover:text-primaryLight">Contact</p>
        </a>
        <div onClick={() => dispatch(changePage(true)) }>
            <p className="hover:text-primaryLight cursor-pointer">Simple-Page</p>
        </div>
        
    </div>
    <div className="links flex gap-2 text-secondaryDark text-3xl">
        <a href="https://github.com/buheracoupe" target="_blank" rel="noopener noreferrer">
         <FaGithub className="icon hover:text-primaryLight" />
        </a>
        <a href="https://www.instagram.com/darrellduri/" target="_blank" rel="noopener noreferrer">
         <FaInstagram className="icon hover:text-primaryLight" />
        </a>
    </div>
</div>  )
}

export default Footer