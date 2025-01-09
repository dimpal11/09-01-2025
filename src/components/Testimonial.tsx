"use client";

import React from "react";
import Image from "next/image";
import Vertor from "@/Image/Vector.svg";
import phone from "@/Image/phone (1).svg";
import email from "@/Image/phone (2).svg";
// import dynamic from 'next/dynamic';
import Chapter from "@/Image/Character1.svg";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css"; // OwlCarousel styles
// import "owl.carousel/dist/assets/owl.theme.default.css"; // OwlCarousel theme

function Testimonial() {
  return (
    <>
      <section className="relative bg-gray-50 container max-w-screen-xl py-0 md:py-5 px-0 md:px-4 mx-auto overflow-x-hidden ">
        {/* Testimonial Heading */}
        <div className="flex relative justify-center items-center gap-5 py-6 font-extrabold uppercase text-sm md:text-lg">
          <Image src={Vertor} alt="image" className="w-4 md:w-6" />
          Testimonial
          <Image src={Vertor} alt="image" className="w-4 md:w-6" />
        </div>

        {/* Subheading and Description */}
        <div className="pb-5 lg:pb-0 px-3 lg:px-0 md:px-10 relative">
          <h2 className="text-center uppercase font-extrabold text-xl sm:text-2xl md:text-4xl text-[#372011] pb-4">
            Our happy users
          </h2>
          <p className="text-center text-[#372011] outfit text-xs sm:text-base font-normal pb-10 leading-5 md:leading-7">
            Lorem ipsum dolor sit amet consectetur. Quis faucibus senectus velit
            mauris nullam. <br />
            Auctor vel lorem sed in felis. Morbi dignissim facilisis arcu
            posuere.
          </p>
        </div>

        {/* OwlCarousel start */}
        {/* OwlCarousel implementation */}
        {/* <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          autoplay
          autoplayTimeout={3000}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
        >
          <div className="item bg-white shadow-md p-5 rounded-lg">
            <p className="text-lg font-medium text-center">Testimonial 1</p>
          </div>
          <div className="item bg-white shadow-md p-5 rounded-lg">
            <p className="text-lg font-medium text-center">Testimonial 2</p>
          </div>
          <div className="item bg-white shadow-md p-5 rounded-lg">
            <p className="text-lg font-medium text-center">Testimonial 3</p>
          </div>
          <div className="item bg-white shadow-md p-5 rounded-lg">
            <p className="text-lg font-medium text-center">Testimonial 4</p>
          </div>
          <div className="item bg-white shadow-md p-5 rounded-lg">
            <p className="text-lg font-medium text-center">Testimonial 5</p>
          </div>
        </OwlCarousel> */}
        {/* End OwlCarousel */}

        {/* owlCarousel end */}

        {/* Contact Us Section */}
        <section className="py-10 mx-auto container px-4 md:px-10 lg:px-16 bg-gray-50 pb-[100px] relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side */}
            <div>
              <div className="flex gap-4 items-center mb-7">
                <Image src={Vertor} alt="image" className="w-4 md:w-6" />
                <h3 className="text-lg md:text-xl font-bold text-[#372011]">
                  Contact us
                </h3>
                <Image src={Vertor} alt="image" className="w-4 md:w-6" />
              </div>
              <p className="text-[#372011] text-base md:text-2xl font-extrabold uppercase mb-5">
                We value your input
                <br />
                Share with us
              </p>
              <p className="text-xs md:text-sm leading-5 md:leading-6 text-[#372011] mb-8">
                Lorem ipsum dolor sit amet consectetur. Tristique sociis nunc
                amet erat. Aenean magna lectus viverra eros nullam at ac. Et
                auctor massa tellus vestibulum. Posuere facilisis sed nunc
                elementum condimentum sed ultrices.
              </p>

              {/* Phone & Email */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#E6A371] p-3 rounded-lg w-12 h-12 flex justify-center items-center">
                    <Image src={phone} alt="logo" />
                  </div>
                  <div>
                    <p className="text-[#372011] font-semibold text-xs">
                      Phone
                    </p>
                    <p className="text-[#372011] font-extrabold text-lg md:text-xl">
                      +91 123 456 3698
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#E6A371] p-3 rounded-lg w-12 h-12 flex justify-center items-center">
                    <Image src={email} alt="logo" />
                  </div>
                  <div>
                    <p className="text-[#372011] font-semibold text-xs">
                      Email ID
                    </p>
                    <p className="text-[#372011] font-extrabold text-lg md:text-xl">
                      info@swarnim.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side (Form) */}
            <div className="p-6 rounded-lg shadow-md border-[#E1E4EA] border">
              <h3 className="text-lg md:text-xl text-center font-bold mb-5">
                Need More Help?
              </h3>
              <form>
                <div className="grid grid-cols-1 gap-4 px-0 md:px-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-[#CFA767] p-2 focus:outline-none w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-[#CFA767] p-2 focus:outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border border-[#CFA767] p-2 focus:outline-none w-full"
                  />
                  <textarea
                    placeholder="Type a Message"
                    className="border border-[#CFA767] p-2 focus:outline-none h-32 w-full"
                  ></textarea>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="bg-[#E6A371] uppercase font-bold text-white px-6 py-2 rounded-md w-full md:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* 120803 */}

        {/* 8866570907 */}

        {/* centen vala end hai */}
      </section>

      {/* center vala start hai  */}
      <section className="relative max-w-[90%] mx-auto bottom-[100px] mt-[20px] mb-[20px]">
        <div className="container mx-auto px-4 bg-[#372011] p-6 shadow-lg relative">
          <div className="flex flex-wrap items-center relative">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 lg:mb-[145px] relative">
              <Image
                src={Chapter}
                alt="logo"
                className="lg:absolute lg:bottom-[-172px] justify-end flex lg:left-[57px]"
              ></Image>
              {/* <img src={foter} alt="Newsletter Illustration" className="max-w-full h-auto" /> */}
            </div>

            {/* Right Side: Text and Form */}
            <div className="w-full md:w-1/2 text-center md:text-right pl-5 relative lg:right-10">
              <h3 className="text-lg md:text-2xl font-extrabold text-white mb-4 uppercase flex justify-end">
                Subscribe to Newsletters
              </h3>
              <p className="text-white mb-6 font-normal text-xs md:text-sm lg:flex justify-end md:text-end lg:text-end text-center">
                Want to stay up to date? <br /> Sign up for our biannual
                updates.
              </p>
              <form className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4  justify-end">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full md:w-2/3 text-sm font-medium px-4 py-2 border border-gray-300 rounded text-[#372011] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="bg-[#E6A371] uppercase text-sm font-medium w-full md:w-auto px-6 py-2 text-white rounded hover:bg-orange-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
