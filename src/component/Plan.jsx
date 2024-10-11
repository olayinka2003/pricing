import React, { useState } from 'react'

export const Plan = () => {
  const [active, setIsActive] = useState("year");

  return (
    <div className='needs'>
        <p className='plan'>We Have the Perfect Plan</p>
        <p className='your'> For Your Needs</p>
        <p className='fees'>No contracts. No surprise fees.</p>
        <div className='annual'><span onClick={()=>setIsActive('year')}className={active=== 'year'? 'year': 'month'} >Yearly</span><span onClick={()=> setIsActive("month")} className={active=== 'month'? 'year': 'month'}>Monthly</span></div>
    </div>
  )
}
