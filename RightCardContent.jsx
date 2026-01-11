import React from 'react'
import { MoveRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div>
         <div className='absolute top-0 px-4 py-3 left-0 flex flex-col justify-between h-full w-full'>
                <div className='h-12 w-12 rounded-full bg-amber-300 flex items-center text-3xl px-4 py-3 mt-6'>
                    {props.id+1}
                </div>
                <p className='text-gray-300 leading-normal text-xl mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quidem in dolore atque aliquid soluta?</p>
                <div className='flex gap-7 text-white'>
                <button className='bg-blue-500 rounded-4xl text-white px-8 py-2 mb-10'>{props.tag}</button>
                <MoveRight className='bg-blue-500 rounded-full py-3 px-4 mb-10' size={50} strokeWidth={1.90} />
                </div>
            </div>
    </div>
  )
}

export default RightCardContent