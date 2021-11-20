import React from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";
const base_Url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow, type }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie, type) => {
    const API_KEY = "ff02beb9190ca6bc657d187c91d3b767";
    const baseUrl = `https://api.themoviedb.org/3/${type}`;
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      var fetchYtUrl = `${baseUrl}/${movie.id}/videos?api_key=${API_KEY}`;
      const ytKey = await axios.get(fetchYtUrl);
      const vidArr = ytKey.data.results;
      console.log(vidArr);
      vidArr.array.forEach((e) => {
        if (e.type === "Trailer") {
          setTrailerUrl(e.key);
        }
      });
    }
  };
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
      </div>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            onClick={() => handleClick(movie, type)}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.poster_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
}

export default Row;
