import React from "react";

const Hero = () => {
  return (
    <section className="h-[80vh] bg-[url('@/assets/images/hero-bg.jpg')] bg-cover bg-no-repeat bg-center w-full">
      <div className="container flex flex-col justify-center h-full">
        <p className="text-[20px] text-white flex flex-col font-bol tracking-wider mb-[32px]">
          / Start / Categories <span>/ Headphones and audio for gaming</span>
        </p>
        <h2 className="text-[46px] font-medium uppercase w-[537px] text-white leading-tight">Headphones AND AUDIO FOR GAMING</h2>
      </div>
    </section>
  );
};

export default Hero;
