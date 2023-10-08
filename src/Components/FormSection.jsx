import React from 'react'
import FormLeft from './FormLeft'
import FormRight from './FormRight'
const FormSection = () => {
  return (
    
      <div class='grid grid-cols-3 mt-10'>
      <div className='col-span-2'>
      <FormLeft/>
      </div>
      <div className='col-span-1'>
      <FormRight/>
      </div>
      </div>
    
  )
}

export default FormSection