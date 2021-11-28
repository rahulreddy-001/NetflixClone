import React from "react";
import axios from "./axios";
import requests from "./Request";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrendingInMovie);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  const truncateString = (string = "", maxLength = 50) =>
    string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_nmae}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncateString(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadebottom" />
    </header>
  );
}

export default Banner;
