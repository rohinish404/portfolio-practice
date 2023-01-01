import React from 'react'
import Instragramming from './Instragramming'
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
function Instagram() {
  return (
    <div id='work' className='mt-5'>
      <h1 className='text-2xl text-center'>Contact me on instagram</h1>
      <p className='text-center'>@captur</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-6 gap-2'>
        <Instragramming socialImg={IgImg1}/>
        <Instragramming socialImg={IgImg2}/>
        <Instragramming socialImg={IgImg3}/>
        <Instragramming socialImg={IgImg4}/>
        <Instragramming socialImg={IgImg5}/>
        <Instragramming socialImg={IgImg6}/>
      </div>
      
    </div>
  )
}

export default Instagram
