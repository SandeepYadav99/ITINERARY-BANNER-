import React from "react";
import Image from "next/image";
import banner1 from "@/app/assets/Banner.jpg";
import footer from "@/app/assets/B1.jpg";

const Banner = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-800">
      <div className="overflow-hidden">
        <div className="w-full md:h-screen  m-5">
          <div className="grid grid-cols-1 md:grid-cols-2  ml-10 md:mb-10">
            <div className="flex justify-center md:justify-start   w-[80%] h-[90%]">
              <Image
                src={banner1}
                alt="banner-1"
                className="w-[80%] h-[90%] transform rounded-tr-[20%] rounded-br-[10%] rounded-bl-[10%] rotate-2 "
              />
            </div>
            <div className="flex w-[80%] h-[90%] justify-center md:justify-start">
              <Image
                src={banner1}
                alt="banner-1"
                className="w-[80%] h-[90%] rounded-tl-[10%]"
              />
            </div>
            <div className="flex w-[80%] h-[90%] justify-center md:justify-start">
              <Image
                src={banner1}
                alt="banner-1"
                className="w-[80%] h-[90%] rounded-tl-[10%]"
              />
            </div>
            <div className="text-white pl-[16rem] mt-14">
              <h1 className="text-lg">TRAVEL TO</h1>
              <h1 className="text-4xl font-bold text-blue-700">DUBAI</h1>
              <div>
                <button className="rounded-sm">BOOK NOW</button>
              </div>
              <div className="mt-16">
                <p>+123-456-7890</p>
                <p>www.reallygreatsite.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 ">
          <Image src={footer} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
