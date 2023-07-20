import React from "react";
import Image from "next/image";
import Footer1 from "@/app/assets/Footer.jpg";
import Pepole from "@/app/assets/Footer-1f.jpg";

const Footer = () => {
  return (
    <div className=" relative xl:mt-[10%] lg:mt-[15%] md:mt-[20%] sm:mt-[25%] ">
      <div className="">
        <Image src={Footer1} className="w-full xl:h-[800px] lg:h-[600px]" />
      </div>
      <div className="bg-slate-200  text-white flex justify-between  items-center m-20 -mt-[25%]">
        <div>
          <div className="p-2  border-none bg-blue-800 text-center rounded-sm text-white">
            <button className="text-2xl font-bold">BOOK NOW</button>
          </div>
          <h1 className="text-2xl m-2">www.reallygreatsite.com</h1>
          <h1 className="text-2xl m-2">+123-456-7890</h1>
        </div>
        <div className="">
          <Image
            src={Pepole}
            className="border-[10px] border-blue-300 rounded-full w-[250px] h-[250px]"
          />
          <Image
            src={Pepole}
            className="rounded-full border-[10px] border-blue-300 ml-10 w-[200px] h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
