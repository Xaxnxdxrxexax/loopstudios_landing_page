"use client";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main
      className={`container mx-auto ${
        isOpen ? "h-screen overflow-hidden" : ""
      }`}
    >
      <header className="relative flex items-center bg-clip-border">
        <picture>
          <source
            srcSet="/images/desktop/image-hero.jpg"
            media="(min-width: 640px)"
          />
          <Image
            src="/images/mobile/image-hero.jpg"
            alt="hero"
            width={375}
            height={375}
            className="w-full lg:brightness-75"
          />
        </picture>
        <nav
          className={`absolute left-0 top-0 z-10 flex w-full items-center px-6 pt-11 lg:px-40`}
        >
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width="192"
            height="32"
            className="w-36 md:max-w-[190px] md:flex-grow"
          />
          <Image
            src={
              !isOpen ? "/images/icon-hamburger.svg" : "/images/icon-close.svg"
            }
            alt="hamburger"
            width="24"
            height="16"
            className="ml-auto md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="fixed inset-0 -z-10 flex flex-col justify-center bg-black">
              <ul className="mx-6 space-y-3 text-2xl uppercase text-white">
                {menu.map((item) => (
                  <li key={item} className="">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="invisible absolute ml-auto flex gap-5 font-bold text-white md:visible md:static">
            {menu.map((item) => (
              <li
                key={item}
                className="group relative flex flex-col items-center hover:cursor-pointer"
              >
                {item}
                <span className="invisible absolute w-[30px] border border-b-2 group-hover:visible group-hover:-bottom-3"></span>
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="absolute mx-6 border-2 border-white px-7 py-5 text-4xl uppercase text-white lg:mx-40 lg:max-w-[660px] lg:px-12 lg:py-10 lg:text-7xl">
          immersive experiences that <div className="w-1/2 lg:hidden"></div>{" "}
          deliver
        </h1>
      </header>
      <p className="text-3xl text-white">hello</p>
    </main>
  );
}

const menu = ["About", "Careers", "Events", "Products", "Support"];
