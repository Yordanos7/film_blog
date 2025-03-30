import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import TypeAnimation from "./TypeAnimation ";
export default function Profile() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:5000/api/film/favorites",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const tmdbIds = response.data.map((fav) => fav.tmdbId);
        const movieDetails = await Promise.all(
          tmdbIds.map((id) =>
            axios.get(
              `https://api.themoviedb.org/3/movie/${id}?api_key=7202d95ece7191d8f1733ff06fcbe9e5`
            )
          )
        );
        setFavoriteMovies(movieDetails.map((res) => res.data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFavoriteMovies();
  }, []);

  const handleFavorite = async (movieId) => {
    try {
      await axios.delete(`http://localhost:5000/api/film/favorite/${movieId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setFavoriteMovies(favoriteMovies.filter((movie) => movie.id !== movieId));
    } catch (error) {
      console.error(
        "Error removing favorite:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="min-h-screen w-full my-52 ">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div>
          <TypeAnimation />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                loading={loading}
                handleFavorite={handleFavorite}
                isFavoriteProp={true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
