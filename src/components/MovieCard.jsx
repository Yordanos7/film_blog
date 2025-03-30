import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import MovieDetail from "./MovieDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Portal from "../Portal";

export default function MovieCard({
  movie,
  loading,
  handleFavorite,
  isFavoriteProp,
}) {
  const [isFavorite, setIsFavorite] = useState(isFavoriteProp);
  const { isAuthenticated } = useAuth();
  const [showDetail, setShowDetail] = useState(false);

  const onFavoriteClick = (movieId) => {
    if (!isAuthenticated) {
      alert("You need to have an account to add favorites");
      return;
    }
    setIsFavorite(movieId);
    handleFavorite(movieId);
  };

  const handleViewDetails = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="relative w-full h-auto bg-white shadow-lg  overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 "></div>
        </div>
      ) : (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto object-cover p-3.5 border-amber-950"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
            <div className="flex space-x-2">
              <button
                onClick={handleViewDetails}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faEllipsisV} size="2x" />{" "}
              </button>
              <button
                onClick={() => onFavoriteClick(movie.id)}
                className={`px-4 py-2 ${
                  isFavorite ? "bg-red-500" : "bg-gray-500"
                } text-white rounded-md hover:opacity-80 transition duration-300`}
              >
                {isFavorite ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        </div>
      )}
      {showDetail && (
        <Portal>
          {" "}
          <MovieDetail movie={movie} onClose={handleCloseDetail} />
        </Portal>
      )}
    </div>
  );
}
