import React, { useEffect, useState } from "react";
import { useSearch } from "../../context/SearchContext";
import MoreRecipes from "../../components/MoreRecipes";
import axios from "axios";

function More({ category }) {
  console.log(category);
  let { setError } = useSearch();
  const [more, setMore] = useState([]);
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  useEffect(() => {
    async function fetchApi() {
      try {
        let response = await axios.get(url);
        console.log(response.data.meals);

        let moreData = response.data.meals;
        setMore(moreData);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchApi();
  }, [url]);
  let { colors } = useSearch();
  return (
    <div className="w-full">
      <h2
        style={{ color: colors.text, letterSpacing: "1px" }}
        className="text-3xl font-bold ml-2 mt-6"
      >
        More {category} Recipes
      </h2>
      <MoreRecipes data={more} />
    </div>
  );
}

export default More;
