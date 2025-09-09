import React from "react";
import BannerV1 from "../../components/banner/BannerV1";
import ServicesV1 from "../../components/services/ServicesV1";
import AboutV1 from "../../components/about/AboutV1";
import ProcessV1 from "../../components/process/ProcessV1";
import WhyChooseUsV1 from "../../components/whyChoose/WhyChooseUsV1";
import BlogV1 from "../../components/blog/BlogV1";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import TestimonialV2 from "../../components/testimonial/TestimonialV2";
import PriceV1 from "../../components/price/PriceV1";

const Home1 = () => {
  return (
    <>
      <HeaderV1 headerClass="dark" />
      <BannerV1 />
      <ServicesV1 />
      <AboutV1 />
      <ProcessV1 />
      <WhyChooseUsV1 chooseClass="bg-gray" />
      <PriceV1 />
      <TestimonialV2 />
      <BlogV1 />
      <FooterV1 />
    </>
  );
};

export default Home1;
