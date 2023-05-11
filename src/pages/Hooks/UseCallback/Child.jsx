// rafce
import React, { memo } from 'react'

const Child = (props) => {


    console.log('child render')

  return (
    <div className='bg-dark text-white my-2 p-3 fs-3'>
        Child component : {props.uiLike}
    </div>
  )
}

// meno trả về 1 component và chống reRender
export default memo(Child)