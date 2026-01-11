import React from 'react'
import RightCard from './RightCard'
const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-3/4 rounded-2xl overflow-x-auto flex flex-nowrap gap-9 px-4 py-9'>
           {props.users.map(function(elem,idx){

              return <RightCard key={idx} id={idx} image={elem.image} tag={elem.tag} />
           })}
    </div>
  )
}

export default RightContent