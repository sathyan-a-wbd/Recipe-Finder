"use client";
import { FaCaretDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import Link from "next/link";
import { useSearch } from "../context/SearchContext";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { IoHeartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
function Header() {
  const [over, setOver] = useState(false);
  const [input, setInput] = useState("");

  let {
    searchValue,
    setSearchValue,
    setUrl,
    colors,
    setData,
    componentId,
    setComponentId,
  } = useSearch();
  const router = useRouter();
  const handleSearch = () => {
    if (input.trim()) {
      setComponentId(true);
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
      setInput("");

      router.push(`/search`);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const [navToggle, setNavToggle] = useState(false);
  const handleToggle = () => {
    setNavToggle(!navToggle);
  };
  return (
    <main
      style={{ backgroundColor: colors.primary }}
      className=" flex items-center justify-between px-3 py-3 rounded-sm"
    >
      <h2 className="text-3xl ml-3 font-bold text-white">
        Pies<span className="text-xs">.recipes</span>
      </h2>
      <div
        style={{ border: `0.5px solid ${colors.secondary}` }}
        className="rounded-3xl px-3 overflow-hidden px-3 w-1/2 md:w-1/3 md:mx-2 max-w-sm mx-auto bg-white flex items-center "
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search recipes"
          type="text"
          className=" focus:outline-none text-gray-700 px-2 py-3 w-full border-0 outline-0"
        />
        <FiSearch
          onClick={handleSearch}
          role="button"
          className="text-gray-500 cursor-pointer"
        />
      </div>

      <div className="flex md:hidden items-center justify-center text-white">
        <HiBars3BottomLeft
          size={30}
          onClick={handleToggle}
          role="button"
          className="cursor-pointer"
        />
      </div>
      <nav className=" hidden md:flex  items-center justify-center font-bold py-5 px-2 gap-4 text-white">
        <Link className="hover:text-orange-200" href={"/"}>
          Home
        </Link>
        <li
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
          className="list-none hover:text-orange-200 cursor-pointer relative flex items-center"
        >
          Recipe-Book <FaCaretDown />
          <ul
            style={{ backgroundColor: colors.secondary, color: "white " }}
            className={`${
              over ? "flex flex-col" : "hidden"
            } absolute  p-3 px-5 rounded-xs gap-5 font-thin text-black top-6 z-10`}
          >
            <Link href={"/category/Breakfast"}>Breakfast</Link>
            <Link href={"/category/Dessert"}>Dessert</Link>
            <Link href={"/category/Starter"}>Starter</Link>
            <Link href={"/category/Side"}>Side Dish</Link>
            <Link href={"/category/Vegan"}>Vegan</Link>
            <Link href={"/category/Vegetarian"}>Vegetarian</Link>
          </ul>
        </li>
        <Link className="hover:text-orange-200" href={"/about"}>
          About Us
        </Link>
      </nav>

      {/* {"After Nav"} */}
      <nav
        className={`${
          navToggle ? "flex" : "hidden"
        } bg-white/70 backdrop-blur-md border border-white/40 shadow-lg rounded-md items-center gap-6 flex-col fixed left-0 top-19 z-20 items-center w-full justify-center font-bold py-5 px-2 gap-4 text-white`}
      >
        <Link
          style={{ color: colors.secondary }}
          className="hover:text-red-500"
          href={"/"}
        >
          Home
        </Link>
        <li
          style={{ color: colors.secondary }}
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
          className="list-none hover:text-red-500 cursor-pointer relative flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-2">
            Recipe-Book <FaCaretDown />
          </div>
          <ul
            style={{ color: colors.secondary }}
            className={`${
              over ? "flex flex-col" : "hidden"
            }  w-full   p-3 px-5 font-extrabold items-center rounded-xs gap-5 font-thin text-black top-6 z-10`}
          >
            <Link
              className="font-bold hover:text-red-500"
              href={"/category/Breakfast"}
            >
              Breakfast
            </Link>
            <Link
              className="font-bold hover:text-red-500"
              href={"/category/Dessert"}
            >
              Dessert
            </Link>
            <Link
              className="font-bold hover:text-red-500"
              href={"/category/Starter"}
            >
              Starter
            </Link>
            <Link
              className="font-bold hover:text-red-500"
              href={"/category/Side"}
            >
              Side Dish
            </Link>
            <Link
              className="font-bold hover:text-red-500"
              href={"/category/Vegan"}
            >
              Vegan
            </Link>
            <Link
              className="font-bold hover:text-red-500"
              href={"/category/Vegetarian"}
            >
              Vegetarian
            </Link>
          </ul>
        </li>
        <Link style={{ color: colors.secondary }} className="" href={"/about"}>
          About Us
        </Link>
      </nav>
    </main>
  );
}

export default Header;
