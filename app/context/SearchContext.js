"use client";
import React, { createContext, useEffect, useContext, useState } from "react";

import axios from "axios";

const SearchContextApi = createContext();

export function SearchContext({ children }) {
  const [componentId, setComponentId] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [searchData, setSearchData] = useState([]);
  const colors = {
    primary: "#E53935",
    secondary: "#FB8C00",
    accent: "#43A047",
    background: "#eeeeeeff",
    text: "#3E2723",
  };

  // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

  useEffect(() => {
    const fetchApi = async () => {
      if (!url) {
        setData([]);
        return;
      }
      setIsLoading(true);
      try {
        let response = await axios.get(url);
        let meals = response.data.meals;
        let category = response.data.categories;
        if (componentId) {
          setSearchData(meals);
          setComponentId(false);
        } else {
          setData(meals || category);
        }
      } catch (error) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, [url]);
  return (
    <SearchContextApi.Provider
      value={{
        data,
        setData,
        error,
        setError,
        isLoading,
        setIsLoading,
        setComponentId,
        setUrl,
        url,
        colors,
        searchData,
      }}
    >
      {children}
    </SearchContextApi.Provider>
  );
}
export function useSearch() {
  return useContext(SearchContextApi);
}
