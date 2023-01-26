import React from 'react'
import {stats} from '../constants'

const Stats = () => {
  return (
    <section className='flex flex-1 justify-around flex-wrap '>
      {stats.map( item =>(
        <div key={item.id} className='flex flex-1 items-center m-3'>
        <h4 className='font-semibold font-poppins  text-white xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43.43px]  '>{item.value}</h4>
          <p className=' uppercase text-gradient ml-4 font-semibold text-[18px]'>
            {item.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats