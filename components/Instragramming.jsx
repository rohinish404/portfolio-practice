import React from 'react'
import Image from 'next/image'
function Instragramming({socialImg}) {
  return (
    <div>
      <Image className='hover:opacity-[70%] cursor-pointer' src={socialImg}/>
     
    </div>
  )
}

export default Instragramming
