import React from "react";

function MainHome() {
  return (
    <>
      <div className="container  mt-5">
        <div className="container-fluid mx-20">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-purple-300 p-4 flex justify-between">
                <div className="">
                    <h2 className="text-2xl">Daily</h2>
                    <h2 className="text-2xl">Horoscope</h2>
                </div>
                <div>
                    <img src="" alt="horo" />
                </div>
            </div>
            <div className="bg-purple-300 p-4 flex justify-between">
                <div className="">
                    <h2 className="text-2xl">Kundlli</h2>
                   
                </div>
                <div>
                    <img src="" alt="kundlli" />
                </div>
            </div>
            <div className="bg-purple-300 p-4 flex justify-between">
                <div className="">
                    <h2 className="text-2xl">Love</h2>
                    <h2 className="text-2xl">Check</h2>
                </div>
                <div>
                    <img src="" alt="love" />
                </div>
            </div>
            <div className="bg-purple-300 p-4 flex justify-between">
                <div className="">
                    <h2 className="text-2xl">Fortune</h2>
                    <h2 className="text-2xl">Wheel</h2>
                </div>
                <div>
                    <img src="" alt="wheel" />
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHome;
