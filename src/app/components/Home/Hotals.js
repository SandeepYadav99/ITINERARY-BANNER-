import React from "react";
import Image from "next/image";
import Hotals from "@/app/assets/Hotal 1.jpg";
import Food1 from "@/app/assets/Food-1.jpg";
import Food2 from "@/app/assets/Food-2.jpg";
import Food3 from "@/app/assets/Food-3.jpg";

const HotalDetails = () => {
  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-[400%] sm:h-[900px]">
        <Image
          src={Hotals}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="bg-[#FFF9ED]  w-full border-t-[20px]  border-l-[30px] border-orange-400 -mt-[20%] absolute p-[5%] rounded-tl-[70%] ">
        <div className="flex justify-end items-end -mt-[25%] right-0 left-0">
          <div className="mr-4 border-orange-600">
            <Image
              src={Food1}
              width="200"
              height="200"
              className="rounded-full border-t-[15px] border-r-[15px] border-l-[15px]  border-orange-500"
            />
            <h1 className="text-center">Hotal 1</h1>
          </div>
          <div className="mr-4">
            <Image
              src={Food2}
              width="300"
              height="300"
              className="rounded-full border-t-[15px] border-r-[15px] border-l-[15px]  border-orange-500"
            />
            <h1 className="text-center">Hotal 2</h1>
          </div>
          <div className="-mr-[1%]">
            <Image
              src={Food2}
              width="400"
              height="400"
              className="rounded-full border-t-[15px] border-r-[15px] border-l-[15px]  border-orange-500"
            />
            <h1 className="text-center">Hotal 2</h1>
          </div>
        </div>
        <div className=" ">
          <div className="absolute">
            <h1 className="text-bold text-[3rem]">Location 2</h1>
            <h1>Lunch & Drinks</h1>
          </div>
          <div className="ml-[60%] mt-10">
            <h1 className="text-bold text-3xl">Hotal 1</h1>
            <p className="text-bold text-xl">
              Hotel 1 description and other details
            </p>
            <ul>
              <li>1. food1</li>
              <li>2. food2</li>
              <li>3. food3</li>
            </ul>
          </div>
        </div>
        <div className="absolute rounded-t-xl bottom-0 ml-[00%] w-[40%] bg-blue-700 sm:ml-[5%] sm:w-[80%]">
          <div className="text-white">
            <div className="flex justify-around items-center p-2">
              <h1 className="">Contact us</h1>
              <p className="">+123-456-7890</p>
              <p className="">www.hotal1.com</p>
              <p className="">@reallygreatsite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotalDetails;
