import React from "react";
import Image from "next/image";
import banner1 from "@/app/assets/Banner.jpg";
import footer from "@/app/assets/B1.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="bg-gray-900">
      <div className=" ml-60 flex justify-between items-center h-100 lg:h-100 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  md:mb-10  w-full left-0 right-0 ">
          <div>
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
          <div className="-ml-20">
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

          {/* 33333333333 */}
          <div className="-mt-[25%] -ml-14">
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
            <div>
              <button className="rounded-sm text-3xl">BOOK NOW</button>
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
