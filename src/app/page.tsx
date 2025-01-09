import React from "react";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import Feacture from "@/components/Feacture";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
// import UseRefPlayer from '@/components/UseRefPlayer'
// import Modal from '@/components/Modal'
// import Modal from '@/components/Modal'
// import Video from '@/components/Video'
function page() {
  return (
    <>
      <head>
        <title>Swarnim</title>
        <meta name="Description" content="Swarnim website" />
      </head>
      <Navbar />
      <Herosection />
      {/* <Herosection/> */}
      <Feacture />
      {/* <UseRefPlayer/> */}
      {/* <Modal/> */}
      {/* <Video/> */}
      <Testimonial />
      <Footer />

      {/* </Model> */}
    </>
  );
}

export default page;
