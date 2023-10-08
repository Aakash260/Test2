import React from 'react'
import Marquee from 'react-fast-marquee'
import {BiSolidDownArrow} from 'react-icons/bi'
const Header = () => {

    return (
        <header className='fixed left-0 right-0 z-20 shadow-md '>
            <div className='flex-row row-span-4 '>
                <div className='1 grid grid-flow-col grid-cols-4 border-2 bg-[#081054] px-5 '>
                      <div className='col-span-3 pr-5 pl-20 h-10 pt-1' >
                    <Marquee >
                    <h3 className='text-white'>Registrations Open for CUET | CLAT | IPMAT 2024 and 2025</h3>
                    </Marquee>
                    </div>
                    <div className='col-span-1 flex gap-4'>
                        <h3 className='p-1 bg-white text-[#103F6B] rounded-sm m-1'>Pay Online</h3>
                        <h3 className='p-1 bg-white rounded-sm text-[#103F6B] m-1'>Register</h3>
                    </div>
                </div>
                <div className='bg-white' >
                    <ul className='flex justify-center items-center gap-8 h-12 header-list'>
                        <li className='h-10'>
                            <img className='h-10' src="https://www.prathamonline.com/images/pratham.png" alt="Logo" />
                        </li>
                        <li>About</li>
                        <span className='flex items-center gap-2'>
                            <li className=''>PREP MODULES</li>
                            <BiSolidDownArrow size={8}/>
                        </span>
                        <span className='flex items-center gap-2'>
                            <li className=''>COURSES</li>
                            <BiSolidDownArrow size={8}/>
                        </span>
                        <span className='flex items-center gap-2'>
                        <li className=''>RESULT</li>
                        <BiSolidDownArrow size={8}/>
                        </span>
                        <li className=''>BLOCK</li>
                        <li className=''>CONTACT</li>
                        <li className=''>CAREER</li>
                        <li className=''>LOGIN</li>
                        <li className=''>PARTNER</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header