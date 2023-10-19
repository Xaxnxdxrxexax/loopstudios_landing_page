"use client";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main
      className={`${
        isOpen ? "h-screen overflow-hidden" : ""
      } mx-auto max-w-[1440px]`}
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
            className="h-auto w-auto lg:brightness-75"
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
      <article className="relative mx-7 my-24 text-center">
        <Image
          src={"/images/desktop/image-interactive.jpg"}
          alt="interactive"
          width={731}
          height={500}
          className="h-full w-full lg:ml-32 lg:mt-36 lg:w-[60%]"
        />
        <div className="bg-white lg:absolute lg:right-0 lg:z-20 lg:w-[45%] lg:-translate-y-full lg:transform lg:pl-24 lg:pt-24 lg:text-left">
          <h2 className="mb-8 mt-12 text-3xl uppercase tracking-wider  lg:mt-0 lg:text-5xl">
            The leader in interactive VR
          </h2>
          <p className="mx-8 font-serif text-sm/6 text-gray-400 lg:ml-0">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </article>
      <aside className="mx-7 my-24 text-center lg:mx-40 lg:mt-48 lg:flex lg:flex-wrap">
        <h3 className="mb-14 text-3xl uppercase lg:order-1 lg:mb-0 lg:text-left lg:text-5xl">
          Our Creations
        </h3>
        <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:order-3 lg:mt-24 lg:grid-cols-4">
          {creations.map(({ title, link }) => (
            <li key={title} className="group relative">
              <picture>
                <source
                  srcSet={`/images/desktop/image-${link}.jpg`}
                  media="(min-width: 730px)"
                />
                <Image
                  src={`/images/mobile/image-${link}.jpg`}
                  alt={title}
                  width={375}
                  height={375}
                  className={`w-full brightness-90 hover:cursor-pointer hover:opacity-50`}
                />
              </picture>
              <p className="absolute bottom-4 left-4 whitespace-pre text-left text-2xl/6 uppercase text-white group-hover:text-black lg:left-10 lg:text-3xl">
                {title}
              </p>
            </li>
          ))}
        </ul>
        <button className="mt-10 border border-black px-9 py-2 text-center font-serif uppercase tracking-[.3em] hover:cursor-pointer hover:bg-black hover:text-white lg:order-2 lg:ml-auto lg:mt-0 lg:self-center">
          see all
        </button>
      </aside>
      <footer className="flex flex-col items-center justify-center bg-black py-16 text-center text-white lg:flex-row lg:flex-wrap lg:px-40">
        <Image
          src={"/images/logo.svg"}
          alt="logo"
          width="192"
          height="32"
          className="w-36 md:max-w-[190px] md:flex-grow lg:order-1"
        />
        <ul className="lg:flew-row mt-4 lg:order-3 lg:mt-0 lg:flex lg:w-1/2 lg:gap-4">
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
        <ul className="flex gap-5 lg:order-2 lg:ml-auto lg:w-1/2 lg:justify-end">
          {icons.map((icon) => (
            <li
              key={icon}
              className="group relative my-5 flex flex-col items-center hover:cursor-pointer"
            >
              <Image
                src={`/images/icon-${icon}.svg`}
                alt={icon}
                width="24"
                height="24"
              />
              <span className="invisible absolute w-[30px] border border-b-2 group-hover:visible group-hover:-bottom-3"></span>
            </li>
          ))}
        </ul>
        <p className="lg:order-4 lg:ml-auto">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

const icons = ["facebook", "twitter", "pinterest", "instagram"];
const menu = ["About", "Careers", "Events", "Products", "Support"];
const creations = [
  {
    title: "deep\nearth",
    link: "deep-earth",
  },
  {
    title: "night\narcade",
    link: "night-arcade",
  },
  {
    title: "soccer\nteam vr",
    link: "soccer-team",
  },
  {
    title: "the\ngrid",
    link: "grid",
  },
  {
    title: "from up\nabove vr",
    link: "from-above",
  },
  {
    title: "pocket\nborealis",
    link: "pocket-borealis",
  },
  {
    title: "the\ncuriosity",
    link: "curiosity",
  },
  {
    title: "make it\nfisheye",
    link: "fisheye",
  },
];
