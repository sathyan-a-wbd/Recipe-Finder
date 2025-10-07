"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearch } from "../../context/SearchContext";
import { FaYoutube } from "react-icons/fa";
import { HashLoader } from "react-spinners";
import More from "./More";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiFireBowl } from "react-icons/gi";
import { LuCookingPot } from "react-icons/lu";
export default function Page({ params }) {
  const unWrapedId = React.use(params);
  const id = unWrapedId.id;
  let {
    data,
    setData,
    setUrl,
    error,
    setError,
    isLoading,
    setIsLoading,
    colors,
  } = useSearch();
  const [category, setCatogory] = useState();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  useEffect(() => {
    setUrl(url);
  }, [data]);

  return (
    <main
      className={`p-5 bg-[${colors.primary}] flex flex-col items-center justify-center`}
    >
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100/50 z-50">
          <HashLoader color="#fd7200" margin={3} size={50} />
        </div>
      )}
      {data.map((meal, i) => (
        <div
          key={i}
          className="  p-3 w-full bg-white/20 backdrop-blur-md border border-white/40 shadow-lg rounded-md"
        >
          <div className="flex flex-col md:flex-row">
            <div className="img flex items-center justify-center w-full md:w-[40%]">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-md"
              />
            </div>
            <div className="img-details px-0 md:px-6 py-1 flex flex-col w-full gap-2">
              <h2
                style={{ color: colors.text }}
                className={`font-bold text-2xl wider-sm`}
              >
                {meal.strMeal}
              </h2>
              <p style={{ color: colors.text }} className="text-sm font-bold">
                Category : {meal.strCategory}
              </p>
              <p
                style={{ color: colors.text }}
                className="text-sm flex items-center gap-2 font-bold"
              >
                <HiOutlineLocationMarker className="font-bold" /> Area :{" "}
                {meal.strArea}
              </p>
              <p style={{ color: colors.text }} className="text-md ">
                <b className="flex items-center gap-2">
                  <LuCookingPot className="mb-1" /> Ingredients :{" "}
                </b>

                {Array.from({ length: 20 }, (_, i) => {
                  const ingredient = meal[`strIngredient${i + 1}`];
                  const measure = meal[`strMeasure${i + 1}`];

                  return ingredient && ingredient.trim() !== ""
                    ? `${ingredient} - ${measure}`
                    : null;
                })
                  .filter(Boolean) // remove nulls
                  .join(", ")}
              </p>
              <div className="flex gap-2">
                {meal.strYoutube && (
                  <Link
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: colors.secondary }}
                    className=" flex items-center gap-2 text-sm rounded-sm px-2 py-2 text-white"
                  >
                    <FaYoutube size={25} /> Watch
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="method mt-3">
            <b className="flex items-center gap-2">
              <GiFireBowl size={20} className="mb-1 " /> Let&apos;s Cook :
            </b>
            <p style={{ color: colors.text }} className="mt-2 indent-10">
              {meal.strInstructions}
            </p>
          </div>
        </div>
      ))}
      {data.map((meal) => (
        <More key={meal.idMeal} category={meal.strCategory} />
      ))}
    </main>
  );
}
