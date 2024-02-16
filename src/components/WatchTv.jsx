import React from 'react'

function WatchTv() {
  return (
    <div>
      <div className='w-[100%] h-[fit-content] my-2 bg-black text-white '>
        <div className='w-[80%] p-4 mx-auto grid lg:grid-cols-2 md:grid-cols-1'>
        <div className='flex my-auto items-center flex-col text-center'>
            <h2 className='text-[50px] font-bold'>Enjoy on your TV</h2>
            <h4 className='text-[20px] p-3'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
        </div>
        <div>
            <img src="./tv.png" alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default WatchTv
