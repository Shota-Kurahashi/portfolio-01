/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import navLogo from "../public/assets/navLogo.png";

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-[100] h-20  w-full shadow-xl">
      <div className="flex h-full w-full items-center justify-between px-4 2xl:px-16">
        <Image src={navLogo} alt="/" width="125" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase">Project</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase">Contact</li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          isOpen
            ? "fixed left-0 top-0 h-screen w-full bg-black/70 transition-colors duration-300 md:hidden"
            : "bg-transparent transition-colors duration-300"
        }
      >
        <div
          className={
            isOpen
              ? "fixed top-0 left-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-300 ease-in sm:w-[60%] md:w-[45%]"
              : " fixed top-0 left-[-100%] h-screen bg-[#ecf0f3] p-10 duration-300 ease-in md:hidden "
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image src={navLogo} alt="/" width="87" height="35" />
            <div
              onClick={handleNav}
              className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="my-4 border-b border-gray-300">
            <p className="w-[85%] py-4 md:w-[90%]">
              Let&apos;s build something legendary together
            </p>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Project</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Contact
              </p>
              <div className="my-4 flex w-full items-center justify-between sm:w-[80%]">
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                  <FaLinkedinIn />
                </div>
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                  <FaGithub />
                </div>
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                  <AiOutlineMail />
                </div>
                <div className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
