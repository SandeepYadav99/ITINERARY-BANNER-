import React from "react";
import Image from "next/image";
import Dubai from "@/app/assets/Banner.jpg";
import Dashboard from "@/app/assets/h-1.jpg";

const Home4 = () => {
  return (
    <div className="mt-[10%]   relative ">
      <header className="ml-2 bg-blue-900 p-[3%] border-opacity-25 flex border-blue-50 border-b-8 border-r-8 items-center justify-center w-[12%] h-[12%] rounded-br-[40px] text-white absolute top-0 left-0">
        <h1 className="text-bold text-2xl">LOGO HERE</h1>
      </header>
      <div className="sm:h-[60rem] lg:h-[70rem] h-[500%]">
        <Image src={Dashboard} className="w-full h-1/2" alt="image" />
      </div>
      <div className="flex justify-around items-center flex-wrap  bottom-[15rem] -mt-[42rem] ">
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4">
          <Image
            src={Dubai}
            alt="image"
            className="rounded-3xl border-8 border-white"
          />
          <h1 className="text-center text-xl">Location 3</h1>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
          <Image
            src={Dubai}
            alt="image"
            className="rounded-3xl border-8 border-white"
          />
          <h1 className="text-center text-2xl">Location 4</h1>
        </div>
        <div className="w-full  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 -mt-20 ">
          <Image
            src={Dubai}
            alt="image"
            className="rounded-3xl border-8 border-white mt-5 h-[20rem]"
          />
          <h1 className="text-center text-xl">Location 5</h1>
        </div>
      </div>
      <div className="mt-2 ml-10">
        <h1 className="text-3xl font-bold text-orange-900">Location 5</h1>
        <p className="text-2xl">
          Location 2 description and location 1/2/3 are clickable buttons. On
          click, the description section will open up along with the section
          below on the next page.
        </p>
      </div>
    </div>
  );
};

export default Home4;
