"use client";
import React, { useEffect } from "react";
import { useSearch } from "../../context/SearchContext";
import Link from "next/link";
import { HashLoader } from "react-spinners";
import { GiCampCookingPot } from "react-icons/gi";
export default function Page({ params }) {
  const unWrapped = React.use(params);
  const category = unWrapped.id;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  let { isLoading, setUrl, data, colors } = useSearch();
  useEffect(() => {
    setUrl(url);
  }, [url]);
  return (
    <main style={{ backgroundColor: colors.background }}>
      <h2 className="text-3xl font-bold text-center py-3">{category}</h2>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100/50 z-50">
          <HashLoader color="#fd7200" margin={3} size={50} />
        </div>
      )}
      <div className="p-4 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data && data.length > 0 ? (
          data.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={meal.strMealThumb || meal.strCategoryThumb}
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
          <h2 className="text-gray-500">No results found</h2>
        )}
      </div>
    </main>
  );
}
