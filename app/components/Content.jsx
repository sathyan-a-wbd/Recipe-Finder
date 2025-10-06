import React, { useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import { HashLoader } from "react-spinners";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import axios from "axios";
import { GiCampCookingPot } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa6";

const Content = () => {
  let {
    data,
    setData,
    error,
    setError,
    isLoading,
    setIsLoading,
    searchValue,
    setSearchValue,
    setUrl,
    colors,
  } = useSearch();
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  useEffect(() => {
    setUrl(url);
  }, []);
  let handleSearch = () => {};
  return (
    <main
      style={{ backgroundColor: colors.background, color: colors.text }}
      className="p-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100/50 z-50">
          <HashLoader color="#fd7200" margin={3} size={50} />
        </div>
      )}

      {data && data.length > 0 ? (
        data.map((meal) => (
          <div key={meal.idMeal || meal.idCategory}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={meal.strMealThumb || meal.strCategoryThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-1">
                <h2 className="font-semibold text-lg">{meal.strMeal || ""}</h2>
                <p className="text-md font-bold">{meal.strCategory}</p>
                <p className="text-sm">{meal.strArea || ""}</p>
                <div className="flex gap-2">
                  {meal.strYoutube && (
                    <Link
                      href={meal.strYoutube}
                      target="_blank"
                      rel="noreferrer"
                      style={{ backgroundColor: colors.primary }}
                      className="bg-blue-600 rounded-sm px-3 py-2 text-white flex items-center gap-2"
                    >
                      Watch <FaYoutube size={25} />
                    </Link>
                  )}
                  <Link
                    // onClick={`${meal.idMeal ? () => handleSearch : ""}`}
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
          </div>
        ))
      ) : (
        <h2 className="text-gray-500">{error.message}</h2>
      )}
    </main>
  );
};

export default Content;
