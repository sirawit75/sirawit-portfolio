import Image from "next/image";
import React from "react";
import shopPng from "../public/assets/projects/shop/shop.png";
import a from "../public/assets/projects/shop/a.png";
import b from "../public/assets/projects/shop/b.png";
import c from "../public/assets/projects/shop/c.png";
import d from "../public/assets/projects/shop/d.png";
import e from "../public/assets/projects/shop/e.png";
import o from "../public/assets/projects/shop/o.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

const shop = () => {
  return (
    <div className="w-full relative mb-8">
      {/* <div className="w-screen h-[50vh] relative bg-black">
        <div className=" top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-1" src={shopPng} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[60%]  translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Property Finders</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div> */}
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill
          src={shopPng}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Shop</h2>
          <h3>React / Tailwind / Golang</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-5 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <br />
          <Image
            src={o}
            alt="/"
            width={650}
            className="mx-auto object-contain"
          />
          <br />
          <p>
            After completing{" "}
            <Link href="/memories" className="underline">
              my first project
            </Link>
            , I took some time to learn more about web development technologies
            and then started my second project, which I named &apos;Shop&apos;.
            The project is called &apos;Shop&apos; because it is designed to
            simulate an online shopping experience, including features such as
            browsing products, adding items to cart and removing items from
            cart. On the client-side, I used &apos;React&apos; and
            &apos;Redux&apos; to manage state in &apos;React&apos;. On the
            server-side, I used &apos;Golang&apos;.
            <br />
            <br />
            The server-side is built on the hexagonal architecture pattern and
            follows the microservices concept. The server-side consists of 4
            distinct services: &apos;User&apos;, &apos;Product&apos;,
            &apos;Logger&apos; and an asynchronous queue named
            &apos;Worker&apos;. All these services are deployed on Amazon
            Elastic Kubernetes Service (EKS) using Github Actions.
            <br />
            <br />
            The client-side of our application is able to connect only to 2 of
            these services via REST API: &apos;User&apos; and
            &apos;Product&apos;. The &apos;User&apos; service handles tasks such
            as logging in and registering. The &apos;Product&apos; service is
            responsible for the cart system and browsing products.
            <br />
            <br />
            Whenever a user logs in or registers, the &apos;User&apos; service
            sends user information via GRPC to the &apos;Logger&apos; service,
            which inserts a login timestamp into the database. Addtionally, the
            &apos;User&apos; service sends a task to the &apos;Worker&apos;
            service to send a welcome email to a new user.
          </p>
          <br />
          Thank you to everyone who has taken the time to review my project, and
          I promise to continue improving my skills and knowledge in the field
          of software development. Have a pleasant day, everyone! :D
          <p className="text-sm font-semibold text-gray-400">(May 1, 2023)</p>
          <br />
          <br />
          <h2>Screenshots</h2>
          <br />
          <div className="w-full  grid grid-cols-5 gap-8">
            <Image
              className="rounded-md shadow-xl col-span-4 h-[120px]  lg:h-[350px]"
              src={shopPng}
              alt="/"
            />
            <Image
              className="rounded-md shadow-xl h-[120px] lg:h-[350px] object-cover col-span-1"
              src={c}
              alt="/"
            />
            <Image
              className="rounded-md shadow-xl col-span-4 h-[120px]  lg:h-[350px]"
              src={a}
              alt="/"
            />
            <Image
              className="rounded-md shadow-xl h-[120px] lg:h-[350px] object-cover col-span-1"
              src={d}
              alt="/"
            />
            <Image
              className="rounded-md shadow-xl col-span-4 h-[120px]  lg:h-[350px]"
              src={b}
              alt="/"
            />
            <Image
              className="rounded-md shadow-xl h-[120px] lg:h-[350px] object-cover col-span-1"
              src={e}
              alt="/"
            />
          </div>
          <br />
          <div className="flex">
            <a
              href="https://github.com/sirawit75/sirawit_shop"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline"
            >
              <button className="px-8 py-2 mt-4 mr-8 flex items-center gap-2">
                Code
                <HiOutlineExternalLink size={18} className="mb-[0.5px]" />
              </button>
            </a>
            <div
              // href="https://shop-52e94.web.app/"
              // target="_blank"
              // rel="noreferrer"
              className="text-white"
            >
              <div className="px-8 py-2 mt-4 mr-8 flex items-center shadow-md rounded-lg gap-2 cursor-default bg-gray-400">
                Demo
                <HiOutlineExternalLink size={18} className="mb-[0.5px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[500px] col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Golang
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> REST API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GRPC
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Postgres
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongo
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redis
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Docker
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Kubernetes
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link className="text-gray-600 py-2 flex items-center" href="/#projects">
        <RiRadioButtonFill className="pr-1 ml-10  " />{" "}
        <span className="underline">Back</span>
      </Link>
    </div>
  );
};

export default shop;
