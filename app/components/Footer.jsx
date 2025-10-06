"use client";
import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <main className="w-full min-h-[100px] bg-gray-200 rounded-md border-gray/20 flex items-center justify-center px-10 ">
      <div className=" flex flex-col gap-3 items-center md:flex-row justify-between w-full mb-3 mt-2">
        <div>
          <Link href={"/"}>
            <h2 className="text-3xl font-bold text-[#3E2723]">Pies.recipes</h2>
          </Link>
        </div>
        <div>
          <i className="text-[#3E2723] text-sm md:text-md font-bold font-italic">
            " Start exploring, and bring joy to your table every day! "
          </i>
        </div>
        <div>
          <ul className="flex gap-4 text-[#3E2723] font-bold">
            <Link className="text-[#3E2723]" href={"/"}>
              {" "}
              Home{" "}
            </Link>
            <Link className="text-[#3E2723]" href={"/about"}>
              {" "}
              About{" "}
            </Link>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Footer;
