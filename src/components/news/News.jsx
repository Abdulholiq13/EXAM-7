import React from "react";
import battle from "../../assets/images/battle.jpg";
import always from "../../assets/images/always-in-the-game.jpg";
import enhance from "../../assets/images/enhance.jpg";

const News = () => {
  const newsArry = [
    {
      url: always,
      title: "Always in the Game",
      desc: "Stay ahead of the latest and greatest gaming tech, featuring new releases, exclusive deals, and exciting pre-orders.",
    },
    {
      url: enhance,
      title: "Enhance Your Experience",
      desc: "Upgrade Your World by Elevating your setup and personalize your space with our collection of stylish and functional gaming accessories.",
    },
    {
      url: battle,
      title: "Command the Battle!",
      desc: "Take control with our diverse range of gaming keyboards, featuring mechanical switches for tactile feedback etc.",
    },
  ];
  return (
    <section className="py-[75px] bg-[#0D2612]">
      <div className="container flex flex-col items-center">
        <h2 className="text-[30px] uppercase font-semibold text-white tracking-wider mb-[32px]">Discover news and innovations</h2>
        <div className="flex items-center justify-between gap-[67px]">
          {newsArry.map((item, inx) => {
            return (
              <div className="max-w-[302px]" key={inx}>
                <img className="mb-[27px]" src={item.url} alt={item.title} />
                <h3 className="text-[20px] uppercase text-white mb-[15px]">{item.title}</h3>
                <p className="w-[290px] text-white mb-4">{item.desc}</p>
                <button className="underline text-white">See more</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
