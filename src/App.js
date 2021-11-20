import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./Request";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Trending in India"
        fetchUrl={requests.fetchTreInIndia}
        isLargeRow={true}
        type="movie"
      />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        type="tv"
      />
      <Row
        title="HBO Max Originals"
        fetchUrl={requests.fetchHBOOriginals}
        isLargeRow={true}
        type="movie"
      />
      <Row
        title="Amazon Originals"
        fetchUrl={requests.fetchAmazonOriginals}
        isLargeRow={true}
        type="tv"
      />
      <Row
        title="Disney+ Hotstar"
        fetchUrl={requests.fetchHotstarOriginals}
        isLargeRow={true}
        type="tv"
      />
      <Row
        title="Aha"
        fetchUrl={requests.fetchAhaOriginals}
        isLargeRow={true}
        type="tv"
      />
      <Row
        title="Sony Liv Originals"
        fetchUrl={requests.fetchSonyLivOriginals}
        isLargeRow={true}
        type="tv"
      />
      <Row
        title="Zee TV Originals"
        fetchUrl={requests.fetchZeeTVOriginals}
        isLargeRow={true}
        type="tv"
      />

      <Row
        title="Trending in Movies"
        fetchUrl={requests.fetchTrendingInMovie}
        type="movie"
      />
      <Row
        title="Trending in TV"
        fetchUrl={requests.fetchTrendingInTV}
        type="tv"
      />
      <Row
        title="Top Rated Movies"
        fetchUrl={requests.fetchTopRatedMovies}
        type="movie"
      />
      <Row
        title="Top Rated TV Shows"
        fetchUrl={requests.fetchTopRatedTVShows}
        type="tv"
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        type="movie"
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        type="movie"
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        type="movie"
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        type="movie"
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        type="movie"
      />
    </div>
  );
}
export default App;
