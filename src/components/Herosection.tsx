import React from "react";
import Image from "next/image";
import herosection from "@/Image/herosection.svg";
import herosection1 from "@/Image/herosection1.svg";
import herologo from "@/Image/herologo.svg";
import subtrat from "@/Image/Subtract (1).svg";

function Herosection() {
  return (
    <>
      <section
        className="container max-w-screen-xl lg:py-5 md:py-5 
     lg:px-5 md:px-4 mx-auto overflow-x-hidden py-3 px-3 lg:mb-6 relative"
      >
        <div className="md:grid md:grid-cols-2">
          <div className="lg:pt-[20px]">
            <h2 className="text-sm flex items-center mb-5 w-full max-w-[300px]">
              Manage inventory, track finances, and make data-driven decisions
              with our intuitive
              <span className="inline text-[#E6A371] m-0 p-0">platform</span>.
            </h2>
            <h1 className="lg:text-[30px] text-[25px] xl:text-[48px] outfit text-2xl font-extrabold text-[#072B2C] mb-6 leading-[48px] xl:leading-[71px] uppercase">
              Streamline Your <br /> Jewelry Business
              <br /> Finances!
            </h1>
            <p className="text-[#372011] font-semibold lg:text-sm text-[10px] leading-8 mb-7">
              • Enhanced Sales Monitoring, Inventory Tracking <br />
              • Simplified Expense Management
              <br />
              • Customized Financial Reports
              <br />
              • Live Metals Rate Updates
              <br />
            </p>
            <div className="flex space-x-4 mt-5">
              <a
                href="#"
                className="bg-[#E6A371] outfit uppercase font-semibold p-[20px] text-sm flex justify-center items-center text-white lg:py-3 lg:px-6 rounded-md hover:bg-[#4f2a0f]"
              >
                Get Started
              </a>
            </div>
          </div>

          <div>
            <div className="relative w-full xl:h-[500PX] overflow-hidden flex flex-col items-center p-10">
              <div
                id="slider"
                className="transition-opacity duration-500 ease-in-out h-full"
              >
                <Image
                  src={herosection}
                  width={0}
                  height={0}
                  alt="Slider"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 start */}

      <section
        className="bg-gray-50 container max-w-screen-xl lg:py-5 md:py-5 
     lg:px-5 md:px-4 mx-auto overflow-x-hidden py-3 px-3 relative"
      >
        <div className="relative justify-center items-center flex">
          <Image src={herosection1} alt="logo"></Image>
          <span className="absolute md:top-[82px] md:left-[300px] lg:top-[80px] top-[30px] left-[120px] lg:left-[396px] xl:left-[512px]">
            <Image
              src={herologo}
              alt="logo"
              className="w-[30%] md:w-[60%] lg:w-full"
            ></Image>
          </span>
        </div>
        {/* <div className='relative justify-center items-center flex lg:bottom-[420px]'>
          <Image src={herologo} alt='logo'></Image>
        </div> */}
        <div className="relative lg:bottom-[50px]">
          <h3 className="uppercase text-[#372011] font-extrabold text-[18px] lg:text-4xl mb-4 flex justify-center items-center">
            Swarnim for Enterprises
          </h3>
          <span className="lg:absolute lg:left-[645px] lg:top-[50px] hidden">
            <Image src={subtrat} alt="logo"></Image>
          </span>
          <p className=" lg:mt-[35px] mx-w-auto justify-center items-center text-justify lg:text-center text-sm font-normal text-[#372011] leading-[22px] lg:mx-[120px]">
            Our Jewelry Accounting Software{" "}
            <span className="text-[#E6A371] text-sm font-medium">
              “swarnim”
            </span>{" "}
            is designed specifically to meet the unique needs of jewelry
            businesses, offering comprehensive financial management solutions
            tailored to your industry. With a user-friendly interface and
            powerful features, our software streamlines your financial
            processes, allowing you to focus more on creating stunning pieces
            and growing your business.
          </p>
        </div>
        {/* 8866570907 */}
      </section>

      {/* section 2 end */}
    </>
  );
}

export default Herosection;
