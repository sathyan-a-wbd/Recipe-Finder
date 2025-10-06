"use client";

import Content from "./components/Content";
import Header from "./components/Header";
import { useSearch } from "./context/SearchContext";
import { useContext } from "react";

export default function Home() {
  return (
    <>
      <Content />
    </>
  );
}
