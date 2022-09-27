import { Reorder, motion } from "framer-motion";
import { useState } from "react";
import Loading from "../components/Loading";
import { LinearProgress } from "@mui/material";

const Test = () => {

    return (
      <div className="relative">
        <label className="sr-only"> Email </label>

        <input
          type="email"
          id="UserEmail"
          placeholder="chad@rhcp.com"
          className="w-full py-2.5 pr-10 border-gray-200 rounded-md shadow-sm sm:text-sm"
        />

        <span className="absolute inset-y-0 right-0 grid w-10 place-content-center">
          <button
            type="button"
            className="text-white bg-rose-600 hover:bg-rose-700 p-0.5 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
              />
            </svg>
          </button>
        </span>
      </div>
    )
}

export default Test;