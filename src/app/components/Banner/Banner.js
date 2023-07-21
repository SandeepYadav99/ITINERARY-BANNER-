import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-gray-900 ">
      <div className="">
        <div className="flex justify-around items-center flex-wrap  ">
          <div className="">
            <div className="hexagone "></div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              //  style={{"visibility: hidden; position: absolute"}}
              width="0"
              height="0"
            >
              <defs>
                <filter id="round">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="30"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
            {/* Second image */}
          </div>
          <div className="">
            <div className="hexagone1"></div>
            <svg
              style={{ visibility: "hidden", position: "absolute" }}
              //  style={{"visibility: hidden; position: absolute"}}
              width="0"
              height="0"
            >
              <defs>
                <filter id="round">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="30"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="-mt-[8%] -ml-[7%]">
            <div className="hexagone3 "></div>
            <svg
              className=""
              style={{ visibility: "hidden", position: "absolute" }}
              //  style={{"visibility: hidden; position: absolute"}}
              width="0"
              height="0"
            >
              <defs>
                <filter id="round">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="30"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="text-white pl-[1px] -mt-10">
            <h1 className="text-2xl">TRAVEL TO</h1>
            <h1 className="text-[5rem] font-bold text-blue-700">DUBAI</h1>
            <div className="">
              <button className=" text-3xl cursor-pointer bg-blue-700 p-2 rounded-xl">
                BOOK NOW
              </button>
            </div>
            <div className="mt-16">
              <p className="text-xl">+123-456-7890</p>
              <p className="text-xl">www.reallygreatsite.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
