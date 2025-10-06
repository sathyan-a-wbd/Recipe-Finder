"use client";
import React, { useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import Link from "next/link";
import { HashLoader } from "react-spinners";
import { GiCampCookingPot } from "react-icons/gi";
const MoreRecipes = ({ data }) => {
  let {
    setUrl,
    colors,
    setData,
    componentId,
    error,
    isLoading,
    setComponentId,
  } = useSearch();

  return (
    <main className="mt-5">
      <div className="bg-white/20 backdrop-blur-md border border-white/40 shadow-lg rounded-md p-4 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data && data.length > 0 ? (
          data.map((meal) => (
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-1">
                <h2 className="font-semibold text-lg">{meal.strMeal || ""}</h2>
                <p className="text-sm text-gray-600">{meal.strCategory}</p>
                <p className="text-sm text-gray-600">{meal.strArea || ""}</p>
                <div className="flex gap-2">
                  {meal.strYoutube && (
                    <Link
                      href={meal.strYoutube}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-blue-600 rounded-sm px-3 py-2 text-white"
                    >
                      Watch
                    </Link>
                  )}
                  <Link
                    href={`${meal.idMeal ? "/reciepes/" : "/category/"}${
                      meal.idMeal ? meal.idMeal : meal.strCategory
                    }`}
                    style={{ backgroundColor: colors.secondary }}
                    className=" rounded-sm px-3 py-2 text-white flex items-center gap-2"
                  >
                    {meal.idMeal ? "Recipe" : "Explore"}
                    <GiCampCookingPot size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-gray-500">{error}</h2>
        )}
      </div>
    </main>
  );
};

export default MoreRecipes;
