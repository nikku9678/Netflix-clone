import React from 'react'
function Netflix() {
  return (
    <div>
      <section className='nk w-[100%] h-[100vh] bg-[url("/netflix.png")] bg-center bg-cover'>
        <div className=' h-[100vh] bg-[rgba(0,0,0,0.5)] '>
            <header className='max-w-[1170px] mx-auto grid grid-cols-2 grid-cols-[30%_auto]'>
                <div className=' p-2'>
                    <img className='w-[148px]' src="https://images.news18.com/ibnlive/uploads/2021/11/netflix-logo-163651496416x9.jpg" alt="" />
                </div>
                <div className='flex justify-end '>
                    <div className='p-2 flex items-center gap-[15px]'>
                    <select name="" id="" className='text-[18px] p-[10px_25px] rounded-2'>  
                    <option value="">English</option>
                    <option value="">Hindi</option>
                    </select>

                    <button className='text-[18px] bg-red-400 p-[8px_20px] rounded-2 mr-1'>Sign In</button>
                    </div>
                </div>
            </header>

            <div className='mt-[120px] py-8 flex flex-col items-center justify-center'>
                <div className=' text-white text-center'>
                    <h2 className='text-[50px] font-bold'>Unlimited movies, TV shows and more</h2>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                </div>
                <div className='my-2 p-3 flex gap-[20px] '>
                    <input className='p-[10px_15px_10px_25px] text-[20px] rounded-2' type="text" placeholder='Enter name' />
                    <button className='bg-red-600 p-[10px_25px] font-[18px] rounded-2'>Get Started</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Netflix
