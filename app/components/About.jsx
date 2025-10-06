"use client";
import React from "react";

const About = () => {
  return (
    <main className="mt-3 p-3 flex items-center justify-center min-h-[500px] bg-gradient-to-r from-[#FB8C00] to-[#E53935]">
      <div className="flex flex-col gap-3 min-w-[50%] text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-lg  px-5 py-6 rounded-xl">
        <h2 className="text-center text-5xl font-bold ">About Pies.recipes</h2>
        <h3 className="text-center text-3xl font bold">
          Welcome to Pies.recipes, your ultimate cooking companion!
        </h3>
        <p className="text-center font-bold text-lg">
          We make it easy to discover new recipes, explore cuisines from around
          the world, and recreate your favorite dishes at home. Whether you’re a
          beginner or a pro in the kitchen, our app helps you find the perfect
          meal based on ingredients, categories, or cravings.
        </p>
        <i className="text-center font-bold text-lg">
          " Start exploring, and bring joy to your table every day! "
        </i>
      </div>
    </main>
  );
};

export default About;
