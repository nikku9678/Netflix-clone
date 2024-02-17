import React from "react";

function Shows() {
  return (
    <div>
      <section>
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
      </section>


      
      <section>
      <div className="w-[100%] h-[fit-content] my-2 bg-black text-white ">
        <div className="w-[80%] p-4 mx-auto grid lg:grid-cols-2 md:grid-cols-1">
        <div>
            <img src="./mobile.jpg" alt="" />
          </div>
          <div className="my-auto items-center text-center">
            <h2 className="text-[50px] font-bold">
              Download your shows to watch offline
            </h2>
            <h4 className="text-[20px] p-3"> 
              Save your favourites easily and always have something to watch.
            </h4>
          </div>
          
        </div>
      </div>
      </section>

      <section>
      <div className="w-[100%] h-[fit-content] my-2 bg-black text-white ">
        <div className="w-[80%] p-4 mx-auto grid lg:grid-cols-2 md:grid-cols-1">
       
          <div className="my-auto items-center text-center">
            <h2 className="text-[50px] font-bold">
              Download your shows to watch offline
            </h2>
            <h4 className="text-[20px] p-3"> 
              Save your favourites easily and always have something to watch.
            </h4>
          </div>
          <div>
            <img src="./device-pile-in.png" alt="" />
          </div>
        </div>
      </div>
      </section>


      <section>
      <div className="w-[100%] h-[fit-content] my-2 bg-black text-white ">
        <div className="w-[80%] p-4 mx-auto grid lg:grid-cols-2 md:grid-cols-1">
        <div>
            <img src="./children.png" alt="" />
          </div>
          <div className="my-auto items-center text-center">
            <h2 className="text-[50px] font-bold">
            Create profiles for kids
            </h2>
            <h4 className="text-[20px] p-3"> 
            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </h4>
          </div>
         
        </div>
      </div>
      </section>
    </div>
  );
}

export default Shows;
