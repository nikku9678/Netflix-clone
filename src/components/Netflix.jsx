import React from "react";
function Netflix() {
  return (
    <div>
      <section className='w-[100%] h-[100vh] bg-[url("/netflix.png")] bg-center bg-cover'>
        <div className="h-[100vh] bg-[rgba(0,0,0,0.5)] ">
          <div>
            <header className="max-w-[1170px] mx-auto grid grid-cols-2 grid-cols-[30%_auto]">
              <div className="p-2">
                <img
                  className="w-[148px]"
                  src="https://images.news18.com/ibnlive/uploads/2021/11/netflix-logo-163651496416x9.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-end">
                <div className="p-2 flex items-center gap-[15px]">
                  <select
                    name=""
                    id=""
                    className="text-[18px] p-[10px_25px] rounded-[10px]"
                  >
                    <option value="">English</option>
                    <option value="">Hindi</option>
                  </select>

                  <button className="text-[18px] bg-red-400 p-[8px_20px] rounded-[10px] mr-1">
                    Sign In
                  </button>
                </div>
              </div>
            </header>
          </div>

          <div className="mt-[120px] py-8 flex flex-col items-center justify-center">
            <div className=" text-white text-center">
              <h2 className="text-[50px] font-bold">
                Unlimited movies, TV shows and more
              </h2>
              <h4 className="text-[25px] p-2">
                Watch anywhere. Cancel anytime.
              </h4>
              <h5 className="text-[20px] p-2">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h5>

              <div className="max-w-[700px] mx-auto px-[40px] mt-[30px] p-2">
              <form action="" className="grid sm:pd-[30px] md:grid-cols-1  md:grid-cols-[70%_auto] gap-[10px]">
                <input
                  className="bg-[transparent] h-[50px] border-[1px] p-[10px_15px_10px_25px] text-[16px] rounded-[5px]"
                  type="text"
                  placeholder="Enter email"
                />
                <button className="h-[50px] bg-red-600 p-[10px] font-[16px] rounded-[5px] hover:bg-[rgba(193,17,25)] duration-300 ">
                  Get Started
                </button>
              </form>
            </div>
            </div>
            
          </div>
        </div>
      </section>


      
    </div>
  );
}

export default Netflix;
