import React from 'react'
import {BiSolidUpArrow,BiSolidDownArrow} from 'react-icons/bi'
import SelectProInput from './SelectProInput'
 
const FormRight = () => {
  return (
    <div className=' sticky top-24 border h-[70vh] rounded-lg mr-14 border-[#F8A120] grid'>
        <h3 className='text-center text-[#0D3D6B] font-bold py-4 pb-0'>GET PERSONALIZED COUNSELLING</h3>
<form action="">
<div className='2 input'>
 
   <SelectProInput />     
   <div className="max-w-2xl mx-auto p-2">
        <select id="countries" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue>Select Course</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select>
</div> 
<div className='grid grid-cols-2 gap-2 px-2'>
<input className='border-1 border-gray-700 rounded-lg' type="text" name="inputName" placeholder="Select Course"/>
<input className='border-1 border-gray-700 rounded-lg' type="text" name="inputName" placeholder="Select Course"/>
<input className='border-1 border-gray-700 rounded-lg' type="text" name="inputName" placeholder="Select Course"/>
<input className='border-1 border-gray-700 rounded-lg' type="text" name="inputName" placeholder="Select Course"/>
<input className='border-1 border-gray-700 rounded-lg' type="text" name="inputName" placeholder="Select Course"/>
<input className='border-1 border-gray-700 rounded-lg' type="text" name="inputName" placeholder="Select Course"/>
</div >
<div className='p-2'>
<div className="max-w-2xl mx-auto p-2">
        <select id="countries" className="custom-select bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue>Select Program</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
    </select>
</div>
<main class="flex  items-center justify-start bg-white">
 
  <button class="group relative px-4 overflow-hidden rounded-2xl bg-orange-400 text-lg font-bold text-white">
    Submit
    <div class="absolute inset-0 w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
  </button>
</main>
</div>

</div>

</form>

    </div>
  )
}

export default FormRight