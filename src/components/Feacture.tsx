"use client";
import React, { useState } from "react";
// import { useState } from 'react';

import Image from "next/image";
import Vertor from "@/Image/Vector.svg";
import Logo from "@/Image/feacterlogo.svg";
import Dot from "@/Image/dot.svg";
import section2 from "@/Image/section2.svg";
import section21 from "@/Image/section21.svg";
import video from "@/Image/video.svg";
import playbutton from "@/Image/playbutton.svg";
import star1 from "@/Image/star1.svg";
import star2 from "@/Image/star2.svg";

// import Video from ''
// import Modal from '@/components/Modal'

export default function Feacture() {
  const [showModal, setShowModal] = useState(false);

  const VideoModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-lg w-full box-border">
        <iframe
          className="block w-full"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/XD-ArYmgcF8"
          title="YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );

  // const MyModel = () =>{
  //   return (
  //     <>
  //     <h2>dimapl</h2>
  //     <p>Hi Dimpal</p>
  //     <button onClick={() => setShowModel(false)}>Accept It</button>
  //     </>

  // MAHESH DIMPAL  8866570907)
  // }
  return (
    <>
      <section className="container max-w-screen-xl lg:py-0 md:py-5 relative lg:px-0 md:px-4 mx-auto overflow-x-hidden bg-gray-50  p-[18px]">
        <div className="flex  justify-center items-center lg:gap-5 pb-6 text-[#372011] font-extrabold text-xl  uppercase">
          <Image src={Vertor} alt="image"></Image>
          Features Section
          <Image src={Vertor} alt="image"></Image>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:mb-5 lg:px-7">
          <div className="group bg-white hover:bg-[#FFEDE0] transition-transform duration-300 p-5 rounded-lg shadow-md text-center lg:text-start border border-[#E1E4EA]">
            <div className="mb-4 bg-[#F6F7FB] group-hover:bg-[#E6A371] transition-transform duration-300 w-[50px] lg:w-[50px] rounded flex items-center justify-center p-3 mx-auto lg:mx-0">
              <Image src={Logo} alt="Logo"></Image>
            </div>
            <div>
              <h3 className="lg:text-sm text-sm font-extrabold text-[#072B2C] flex items-center gap-3 mt-4 mb-3 justify-center lg:justify-start">
                <span>
                  <Image src={Dot} alt="logo"></Image>
                </span>
                Sales / Tax Management
              </h3>
              <p className="text-[#072B2C] mt-2 text-[13px] lg:text-[12px] font-normal text-justify leading-[20px]">
                Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean
                ante ac enim mattis vestibulum vitae. Sit dolor id purus
                adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada
                quam turpis euismod blandit. Rhoncus proin aliquet risus massa
                pellentesque elit. Non eget.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="group bg-white hover:bg-[#FFEDE0] transition-transform duration-300 p-5 rounded-lg shadow-md text-center lg:text-start border border-[#E1E4EA]">
            <div className="mb-4 bg-[#F6F7FB] group-hover:bg-[#E6A371] transition-transform duration-300 w-[50px] lg:w-[50px] rounded flex items-center justify-center p-3 mx-auto lg:mx-0">
              <Image src={Logo} alt="Logo"></Image>
            </div>
            <h3 className="lg:text-sm text-sm font-extrabold text-[#072B2C] flex items-center gap-3 mt-4 mb-3 justify-center lg:justify-start">
              <span>
                <Image src={Dot} alt="logo"></Image>
              </span>
              Sales / Tax Management
            </h3>
            <p className="text-[#072B2C] mt-2 text-[10px] lg:text-[12px] font-normal leading-[20px] text-justify">
              Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean
              ante ac enim mattis vestibulum vitae. Sit dolor id purus
              adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada
              quam turpis euismod blandit. Rhoncus proin aliquet risus massa
              pellentesque elit. Non eget.
            </p>
          </div>

          {/* 3 */}
          <div className="group bg-white hover:bg-[#FFEDE0] transition-transform duration-300 p-5 rounded-lg shadow-md text-center lg:text-start border border-[#E1E4EA]">
            <div className="mb-4 bg-[#F6F7FB] group-hover:bg-[#E6A371] transition-transform duration-300 w-[50px] lg:w-[50px] rounded flex items-center justify-center p-3 mx-auto lg:mx-0">
              <Image src={Logo} alt="Logo"></Image>
            </div>
            <h3 className="lg:text-sm text-sm font-extrabold text-[#072B2C] flex items-center gap-3 mt-4 mb-3 justify-center lg:justify-start">
              <span>
                <Image src={Dot} alt="logo"></Image>
              </span>
              Sales / Tax Management
            </h3>
            <p className="text-[#072B2C] mt-2 text-[10px] lg:text-[12px] font-normal text-justify leading-[20px]">
              Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean
              ante ac enim mattis vestibulum vitae. Sit dolor id purus
              adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada
              quam turpis euismod blandit. Rhoncus proin aliquet risus massa
              pellentesque elit. Non eget.
            </p>
          </div>
          {/* 4 */}
          <div className="group bg-white hover:bg-[#FFEDE0] transition-transform duration-300 p-5 rounded-lg shadow-md text-center lg:text-start border border-[#E1E4EA]">
            <div className="mb-4 bg-[#F6F7FB] group-hover:bg-[#E6A371] transition-transform duration-300 w-[50px] lg:w-[50px] rounded flex items-center justify-center p-3 mx-auto lg:mx-0">
              <Image src={Logo} alt="Logo"></Image>
            </div>
            <h3 className="lg:text-sm text-sm font-extrabold text-[#072B2C] flex items-center gap-3 mt-4 mb-3 justify-center lg:justify-start">
              <span>
                <Image src={Dot} alt="logo"></Image>
              </span>
              Sales / Tax Management
            </h3>
            <p className="text-[#072B2C] mt-2 text-[10px] lg:text-[12px] font-normal text-justify leading-[20px]">
              Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean
              ante ac enim mattis vestibulum vitae. Sit dolor id purus
              adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada
              quam turpis euismod blandit. Rhoncus proin aliquet risus massa
              pellentesque elit. Non eget.
            </p>
          </div>

          {/* 5 */}
          <div className="group bg-white hover:bg-[#FFEDE0] transition-transform duration-300 p-5 rounded-lg shadow-md text-center lg:text-start border border-[#E1E4EA]">
            <div className="mb-4 bg-[#F6F7FB] group-hover:bg-[#E6A371] transition-transform duration-300 w-[50px] lg:w-[50px] rounded flex items-center justify-center p-3 mx-auto lg:mx-0">
              <Image src={Logo} alt="Logo"></Image>
            </div>
            <h3 className="lg:text-sm text-sm font-extrabold text-[#072B2C] flex items-center gap-3 mt-4 mb-3 justify-center lg:justify-start">
              <span>
                <Image src={Dot} alt="logo"></Image>
              </span>
              Sales / Tax Management
            </h3>
            <p className="text-[#072B2C] mt-2 text-[10px] lg:text-[13px] font-normal text-justify leading-[20px]">
              Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean
              ante ac enim mattis vestibulum vitae. Sit dolor id purus
              adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada
              quam turpis euismod blandit. Rhoncus proin aliquet risus massa
              pellentesque elit. Non eget.
            </p>
          </div>

          {/* 6 */}
          <div className="group bg-white hover:bg-[#FFEDE0] transition-transform duration-300 p-5 rounded-lg shadow-md text-center lg:text-start border border-[#E1E4EA]">
            <div className="mb-4 bg-[#F6F7FB] group-hover:bg-[#E6A371] transition-transform duration-300 w-[50px] lg:w-[50px] rounded flex items-center justify-center p-3 mx-auto lg:mx-0">
              <Image src={Logo} alt="Logo"></Image>
            </div>
            <h3 className="lg:text-sm text-sm font-extrabold text-[#072B2C] flex items-center gap-3 mt-4 mb-3 justify-center lg:justify-start">
              <span>
                <Image src={Dot} alt="logo"></Image>
              </span>
              Sales / Tax Management
            </h3>
            <p className="text-[#072B2C] mt-2 text-[10px] lg:text-[12px] font-normal text-justify leading-[20px]">
              Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean
              ante ac enim mattis vestibulum vitae. Sit dolor id purus
              adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada
              quam turpis euismod blandit. Rhoncus proin aliquet risus massa
              pellentesque elit. Non eget.
            </p>
          </div>

          {/* 7 */}
          <div className="group bg-white hover:bg-[#FFEDE0] transition-transform duration-300 p-5 rounded-lg shadow-md text-center lg:text-start border border-[#E1E4EA]">
            <div className="mb-4 bg-[#F6F7FB] group-hover:bg-[#E6A371] transition-transform duration-300 w-[50px] lg:w-[50px] rounded flex items-center justify-center p-3 mx-auto lg:mx-0">
              <Image src={Logo} alt="Logo"></Image>
            </div>
            <h3 className="lg:text-sm text-sm font-extrabold text-[#072B2C] flex items-center gap-3 mt-4 mb-3 justify-center lg:justify-start">
              <span>
                <Image src={Dot} alt="logo"></Image>
              </span>
              Sales / Tax Management
            </h3>
            <p className="text-[#072B2C] mt-2 text-[10px] lg:text-[12px] font-normal text-justify leading-[20px]">
              Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean
              ante ac enim mattis vestibulum vitae. Sit dolor id purus
              adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada
              quam turpis euismod blandit. Rhoncus proin aliquet risus massa
              pellentesque elit. Non eget.
            </p>
          </div>

          {/* 8 */}

          <div className="group bg-white hover:bg-[#FFEDE0] transition-transform duration-300 p-5 rounded-lg shadow-md text-center lg:text-start border border-[#E1E4EA]">
            <div className="mb-4 bg-[#F6F7FB] group-hover:bg-[#E6A371] transition-transform duration-300 w-[50px] lg:w-[50px] rounded flex items-center justify-center p-3 mx-auto lg:mx-0">
              <Image src={Logo} alt="Logo"></Image>
            </div>
            <h3 className="lg:text-sm text-sm font-extrabold text-[#072B2C] flex items-center gap-3 mt-4 mb-3 justify-center lg:justify-start">
              <span>
                <Image src={Dot} alt="logo"></Image>
              </span>
              Sales / Tax Management
            </h3>
            <p className="text-[#072B2C] mt-2 text-[10px] lg:text-[12px] font-normal text-justify leading-[20px]">
              Lorem ipsum dolor sit amet consectetur. Potenti nullam at aenean
              ante ac enim mattis vestibulum vitae. Sit dolor id purus
              adipiscing dolor cursus sagittis pharetra sodales. Ut malesuada
              quam turpis euismod blandit. Rhoncus proin aliquet risus massa
              pellentesque elit. Non eget.
            </p>
          </div>
        </div>
      </section>

      {/* section 2 start */}
      <section className="relative container max-w-screen-xl py-0 md:py-5 px-0 md:px-4 mx-auto overflow-x-hidden">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 p-3 lg:p-0 ">
          {/* 1 */}
          {/* <div className='w-full'> */}
          <div className="w-full bg-[] rounded-[10px] p-4 xl:p-0">
            <Image src={section2} alt="image"></Image>
            {/* <Image></Image> */}
          </div>
          <div className="w-full flex flex-col justify-center">
            <h3 className="text-[#E6A371] font-extrabold text-2xl uppercase leading-9 text-center lg:text-start">
              Simple to learn,
              <br /> easier to use
            </h3>
            <p className="text-xs text-[#372011] font-normal mt-5 leading-6">
              Our Jewelry Accounting Software “swarnim” is designed specifically
              to meet the <br /> unique needs of jewelry businesses, offering
              comprehensive financial <br /> management solutions tailored to
              your industry. With a user-friendly interface and <br /> powerful
              features, our software streamlines your financial processes,
              allowing you <br /> to focus more on creating stunning pieces and
              growing your business.
            </p>
          </div>

          {/* 2 */}

          <div className="w-full flex flex-col justify-center lg:ml-[15%]">
            <h3 className="text-[#E6A371] font-extrabold text-2xl uppercase leading-9">
              Insightful, actionable & <br />
              customizable reports
            </h3>
            <p className="text-xs text-[#372011] font-normal mt-5 leading-6">
              Our Jewelry Accounting Software “swarnim” is designed specifically
              to
              <br /> meet the unique needs of jewelry businesses, offering
              comprehensive <br />
              financial management solutions tailored to your industry. With a
              user-
              <br />
              friendly interface and powerful features, our software streamlines
              your <br /> financial processes, allowing you to focus more on
              creating stunning pieces
              <br /> and growing your business.
            </p>
          </div>
          <div className="w-full bg-[] rounded-[10px] p-4 mb-4 mx-auto lg:ml-[12%]">
            <Image src={section21} alt="logo"></Image>
          </div>

          {/* 3 */}
          <div className="w-full bg-[] rounded-[10px] p-4 ">
            <Image src={section2} alt="image"></Image>
            {/* <Image></Image> */}
          </div>
          <div className="w-full flex flex-col justify-center ">
            <h3 className="text-[#E6A371] font-extrabold text-2xl uppercase leading-8">
              Anywhere, anytime and <br />
              secure access
            </h3>
            <p className="text-xs text-[#372011] font-normal mt-5 leading-6">
              Our Jewelry Accounting Software “swarnim” is designed specifically
              to meet the <br /> unique needs of jewelry businesses, offering
              comprehensive financial <br /> management solutions tailored to
              your industry. With a user-friendly interface and <br /> powerful
              features, our software streamlines your financial processes,
              allowing you <br /> to focus more on creating stunning pieces and
              growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 end */}

      {/* section video start */}

      <div className="xl:flex lg:flex justify-between container mx-auto relative xl:px-[110px] lg:top-[45px] hidden">
        <Image src={star1} width={0} height={0} alt="logo" />
        <div>
          <Image src={star2} width={0} height={0} alt="logo" />
        </div>
      </div>
      <section className="container max-w-screen-xl justify-center flex relative mx-auto px-4">
        <div className=" lg:p-10 p-2 md:p-5 relative bg-gradient-to-r from-[#F0DB92] to-[#BF9033] flex justify-center items-center ">
          <div className="bg-abc relative">
            <Image
              src={video}
              alt="logo"
              width={0}
              height={0}
              className="w-full"
            />
          </div>
        </div>

        <div className="absolute top-[58px] md:top-[238px] lg:top-[260px] xl:[300px]">
          <button
            className="flex justify-center mx-auto"
            onClick={() => setShowModal(true)}
          >
            <Image src={playbutton} alt="logo"></Image>
          </button>
          {showModal && <VideoModal />}
        </div>
      </section>

      {/* // section video end  */}

      {/* section 3 start */}
      <section className="bg-gray-50  relative container max-w-screen-xl py-0 px-0 md:px-4 lg:px-0 mx-auto overflow-x-hidden">
        <div className="container mx-auto pt-12">
          <div className="text-center">
            <h3 className="uppercase text-[#372011] font-extrabold lg:text-[36px] text-[26px]">
              Simplify Your Life and Grow{" "}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 container mx-auto lg:p-10 p-4 max-w-5xl">
            {/* <!-- Box 1 --> */}
            <div className="flex items-start space-x-4 lg:items-center">
              <div className="flex-shrink-0">
                <div className="text-yellow-500 border border-yellow-500 rounded p-3 text-center font-bold text-xl w-[50px]">
                  1
                </div>
              </div>
              <p className="text-[#372011] text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur. Luctus ante <br /> enim
                amet platea consequat. Imperdiet nunc aenean <br />
                bibendum elementum nulla porttitor. Magna elit <br /> egestas
                dui porttitor. Turpis lectus risus quam.
              </p>
            </div>
            {/* <!-- Repeat similar structure for other boxes --> */}
            {/* box 2 */}
            <div className="flex items-start space-x-4 lg:items-center">
              <div className="flex-shrink-0">
                <div className="text-yellow-500 border border-yellow-500 rounded p-3 text-center font-bold text-xl w-[50px]">
                  3
                </div>
              </div>
              <p className="text-[#372011] text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur. Luctus ante <br /> enim
                amet platea consequat. Imperdiet nunc aenean <br />
                bibendum elementum nulla porttitor. Magna elit <br /> egestas
                dui porttitor. Turpis lectus risus quam.
              </p>
            </div>
            {/* <!-- Continue for numbers 3 to 6 --> */}
            {/* box 3 */}
            <div className="flex items-start space-x-4 lg:items-center">
              <div className="flex-shrink-0">
                <div className="text-yellow-500 border border-yellow-500 rounded p-3 text-center font-bold text-xl w-[50px]">
                  2
                </div>
              </div>
              <p className="text-[#372011] text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur. Luctus ante <br /> enim
                amet platea consequat. Imperdiet nunc aenean <br />
                bibendum elementum nulla porttitor. Magna elit <br /> egestas
                dui porttitor. Turpis lectus risus quam.
              </p>
            </div>

            {/* box 4 */}
            <div className="flex items-start space-x-4 lg:items-center">
              <div className="flex-shrink-0">
                <div className="text-yellow-500 border border-yellow-500 rounded p-3 text-center font-bold text-xl w-[50px]">
                  4
                </div>
              </div>
              <p className="text-[#372011] text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur. Luctus ante <br /> enim
                amet platea consequat. Imperdiet nunc aenean <br />
                bibendum elementum nulla porttitor. Magna elit <br /> egestas
                dui porttitor. Turpis lectus risus quam.
              </p>
            </div>

            {/* box 5 */}
            <div className="flex items-start space-x-4 lg:items-center">
              <div className="flex-shrink-0">
                <div className="text-yellow-500 border border-yellow-500 rounded p-3 text-center font-bold text-xl w-[50px]">
                  3
                </div>
              </div>
              <p className="text-[#372011] text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur. Luctus ante <br /> enim
                amet platea consequat. Imperdiet nunc aenean <br />
                bibendum elementum nulla porttitor. Magna elit <br /> egestas
                dui porttitor. Turpis lectus risus quam.
              </p>
            </div>

            {/* box 6 */}
            <div className="flex items-start space-x-4 lg:items-center">
              <div className="flex-shrink-0">
                <div className="text-yellow-500 border border-yellow-500 rounded p-3 text-center font-bold text-xl w-[50px]">
                  6
                </div>
              </div>
              <p className="text-[#372011] text-sm font-normal">
                Lorem ipsum dolor sit amet consectetur. Luctus ante <br /> enim
                amet platea consequat. Imperdiet nunc aenean <br />
                bibendum elementum nulla porttitor. Magna elit <br /> egestas
                dui porttitor. Turpis lectus risus quam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 end */}
    </>
  );
}

// export default Feacture;
