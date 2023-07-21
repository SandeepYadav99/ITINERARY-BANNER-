"use client";
import React from "react";
import Image from "next/image";
import Footer1 from "@/app/assets/Footer.jpg";
import Pepole from "@/app/assets/Footer-1f.jpg";

const Footer = () => {
  const bookingHandler = () => {
    alert("Book Now");
  };
  return (
    <div className=" relative mt-[5%] h-screen overflow-hidden">
      <div className="">
        <Image
          src={Footer1}
          alt="image"
          className="w-full xl:h-[800px] lg:h-[900px]"
        />
      </div>
      <div className="bg-slate-200  text-white flex justify-between  items-center m-20 -mt-[20%] md:-mt-[30%]  ">
        <div>
          <div className="p-2  border-none bg-blue-800 text-center rounded-sm text-white">
            <button
              onClick={() => bookingHandler()}
              className="text-2xl font-bold rounded-3xl"
            >
              BOOK NOW
            </button>
          </div>
          <h1 className="text-2xl m-2">www.reallygreatsite.com</h1>
          <h1 className="text-2xl m-2">+123-456-7890</h1>
        </div>
        <div className="-mt-10 p-5 m-10">
          <Image
            src={Pepole}
            alt="image"
            className="border-[10px] border-blue-300 rounded-full w-[250px] h-[250px] -mt-10"
          />
          <Image
            src={Pepole}
            alt="image"
            className="rounded-full border-[10px] border-blue-300 ml-10 w-[200px] h-[200px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
