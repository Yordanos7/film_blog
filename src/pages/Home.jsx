import React, { useState, useEffect } from "react";
import axios from "axios";
import { getPopularMovies } from "../utils/Api.js";
import MovieCard from "../components/MovieCard.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [backgroundArray, setBackgroundArray] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getPopularMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    const fetchFavorites = async () => {
      if (isAuthenticated) {
        const response = await axios.get(
          "http://localhost:5000/api/film/favorites",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setFavoriteMovies(response.data.map((fav) => fav.tmdbId));
      }
    };
    fetchFavorites();
  }, [isAuthenticated]);

  const handleFavorite = async (movieId) => {
    if (!isAuthenticated) {
      alert("You need to have an account to add favorites");
      return;
    }

    const isFavorite = favoriteMovies.includes(movieId);
    try {
      if (isFavorite) {
        await axios.delete(
          `http://localhost:5000/api/film/favorite/${movieId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setFavoriteMovies(favoriteMovies.filter((id) => id !== movieId));
      } else {
        await axios.post(
          `http://localhost:5000/api/film/favorite/${movieId}`,
          { movieId },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setFavoriteMovies([...favoriteMovies, movieId]);
      }
    } catch (error) {
      console.error(
        "Error handling favorite:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    async function fetchTrending() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=7202d95ece7191d8f1733ff06fcbe9e5"
      );
      const backdropPath = response.data.results.map(
        (movie) => `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      );
      const randomIndex = Math.floor(Math.random() * backdropPath.length);
      setBackgroundArray(backdropPath[randomIndex]);
    }
    fetchTrending();
  }, []);
  return (
    <div className=" w-full min-h-screen ">
      <div className="w-full h-auto ">
        <img
          src={backgroundArray}
          alt=""
          className="w-full h-96 object-cover rounded-lg shadow-lg "
        />
      </div>

      <div className="w-full flex space-x-4 mt-2 justify-center">
        <h2 className="relative -top-36 text-3xl text-amber-600">
          {" "}
          "Lights, Camera, Action! Welcome"
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            loading={loading}
            handleFavorite={handleFavorite}
          />
        ))}
      </div>
    </div>
  );
}
