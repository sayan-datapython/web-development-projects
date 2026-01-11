import React from 'react'
import { ArrowUpRight } from 'lucide-react'
const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
      <div>
        <h3 className=' text-6xl font-bold mb-10 leading-[1.1]'>Prospective <br/> Customer <br/> Segmentation</h3>
        <p className='text-xl text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat eaque animi saepe ex facere fuga, modi quod distinctio perferendis consequuntur?</p>
      </div>
      <div className='text-8xl'>
        <ArrowUpRight size={100} />
      </div>
    </div>
  )
}

export default LeftContent