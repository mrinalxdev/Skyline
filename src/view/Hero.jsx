import React, { useState } from "react";

import heroImage from "../assets/hero-image.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";
import FadeIn from "../components/FadeIn";
import NavLink from "../components/NavLink";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative w-full max-w-[1490px] flex items-center justify-between pt-10 mx-auto px-10">
        <span className="font-bold text-3xl text-white">SkyLine</span>
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
          <NavLink to="services">Services</NavLink>
          <NavLink to="products">Shoreferences</NavLink>
          <NavLink to="references">References</NavLink>
          <NavLink to="care">Care</NavLink>
        </ul>

        <img
          src={cartIcon}
          className="hidden md:block cursour-pointer"
          alt=""
        />
        <HiMenuAlt3
          size={30}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div
          className={`block md:hidden w-full fixed ${
            !showMobileMenu ? "-top-[410px]" : "top-0"
          } left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose
            size={25}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />

          <ul className="pt-[60px] items-center flex flex-col gap-8">
            <NavLink to="services" mobileMenu>
              Services
            </NavLink>
            <NavLink to="products" mobileMenu>
              Shoreferences
            </NavLink>
            <NavLink to="references" mobileMenu>
              References
            </NavLink>
            <NavLink to="care" mobileMenu>
              Care
            </NavLink>
          </ul>

          <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="" />
        </div>
      </div>

      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]">
          {heroTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
        <h1 className="mt-6 text-center text-lg xs:text-lg text-white max-w-[500px]">
          {heroSubtitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.2} direction="up" padding fullWidth>
        <div className="relative w-full xs:w-[460px] mt-11">
          <input type="text" placeholder="Search" className="rounded-full w-full pl-6 pr-[68px] py-4 bg-primary outline-none text-white text-base xs:text-lg placeholder-white"/>
          <img src={searchIcon} className="absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer " alt="" />
        </div>
      </FadeIn>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full background rounded-b-4 " />
    </div>
  );
};

export default Hero;
