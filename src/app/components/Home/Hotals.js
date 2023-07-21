import React from "react";
import Image from "next/image";
import Hotals from "@/app/assets/Hotal 1.jpg";
import Food1 from "@/app/assets/Food-1.jpg";
import Food2 from "@/app/assets/Food-2.jpg";
import Food3 from "@/app/assets/Food-3.jpg";

const HotalDetails = () => {
  return (
    <div className="mt-10 overflow-hidden">
      {/* Banner */}
      <div className="relative  h-[80%] sm:h-[30rem] md:h-[60rem] xl:h-screen lg:h-[50rem]">
        <Image
          src={Hotals}
          alt="image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="bg-[#FFF9ED] lg:-mt-[30rem] w-[96%] border-t-[20px]  border-l-[30px] border-orange-400 -mt-[20%]  absolute p-[5%] rounded-tl-[70%] ">
        <div className="flex justify-end items-end -mt-[25%] ">
          <div className="border-orange-600">
            <Image
              src={Food1}
              alt="image"
              className="rounded-full h-[200px] w-[200px] border-t-[30px] border-r-[20px] border-l-[20px]  border-orange-500"
            />
            <h1 className="text-center">Hotal 1</h1>
          </div>
          <div className="">
            <Image
              src={Food2}
              alt="image"
              className="rounded-full h-[300px] w-[300px] border-t-[40px] border-r-[30px] border-l-[30px]  border-orange-500"
            />
            <h1 className="text-center">Hotal 2</h1>
          </div>
          <div className="">
            <Image
              src={Food2}
              alt="image"
              className="rounded-full h-[400px] w-[400px]  border-t-[45px] border-r-[35px] border-l-[35px]  border-orange-500"
            />
            <h1 className="text-center">Hotal 3</h1>
          </div>
        </div>
        <div className=" ">
          <div className="absolute">
            <h1 className="text-bold text-[4rem] text-black">Location 2</h1>
            <h1 className="text-3xl text-bold text-black">Lunch & Drinks</h1>
          </div>
          <div className="ml-[60%] mt-10 ">
            <h1 className="text-bold text-[3rem]">Hotal 1</h1>
            <p className="text-bold text-2xl">
              Hotel 1 description and other details
            </p>
            <ul className="text-2xl">
              <li>1. food1</li>
              <li>2. food2</li>
              <li>3. food3</li>
            </ul>
          </div>
        </div>
        <div className=" absolute p-2 rounded-t-xl bottom-0 ml-[00%] w-[40%] bg-blue-700 sm:ml-[5%] sm:w-[80%]">
          <div className="text-white">
            <div className="flex justify-around items-center p-2">
              <h1 className="text-3xl">Contact us</h1>
              <p className="text-3xl">+123-456-7890</p>
              <p className="text-3xl">www.hotal1.com</p>
              <p className="text-3xl">@reallygreatsite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotalDetails;
