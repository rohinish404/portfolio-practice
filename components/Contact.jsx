import React from 'react'

function Contact() {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
         <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
      <form className='max-w-[600px] m-auto p-4 h-screen'>
          <div className='flex justify-between'>
              <input className='border-2 border-gray-350 rounded-md px-3 py-1 w-[48%] shadow-lg' placeholder='Name' type='text'/>

              <input className='shadow-lg w-[48%] border-2 border-gray-350 rounded-md px-3 py-1' placeholder='Email' type='email'/>
          </div>
          <input className='mt-3 border-2 border-gray-350 rounded-md w-full px-3 py-1 shadow-lg' placeholder='Subject' type='text' />
          <textarea className='mt-3 border shadow-lg p-3 w-full rounded-md' cols="10" rows="5" placeholder='Message'></textarea>
          <button className='border shadow-lg p-3 w-full mt-2 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
