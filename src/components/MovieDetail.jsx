import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const MovieDetail = ({ movie, onClose }) => {
  return (
    <div
      className={` w-full h-[200vh]  fixed inset-0 overflow-y-auto  bg-black bg-opacity-80 backdrop-blur-md flex top-0 
       justify-center 
      }`}
    >
      <div className="relative max-w-5xl w-full bg-gray-900 text-white rounded-lg shadow-2xl overflow-hidden flex flex-col top-0 -my-64 ">
        {/* Movie Banner */}
        <div className="relative  w-full h-96">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
            <h2 className="text-4xl font-extrabold text-white drop-shadow-md">
              {movie.title}
            </h2>
          </div>
        </div>

        {/* Movie Details */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Poster */}
          <div className="flex justify-center items-center mb-4 lg:mb-0">
            <button
              onClick={onClose}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                size="2x"
                className="text-gray-600 hover:text-gray-800 cursor-pointer"
              />
            </button>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-72 h-auto rounded-lg shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Description */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
            <div className="flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white text-sm px-4 py-2 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-lg">
              <strong>⭐ {movie.vote_average} / 10</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
