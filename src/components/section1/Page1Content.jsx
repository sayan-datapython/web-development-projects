import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='h-[90vh] flex items-center gap-10 py-4 px-17'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content