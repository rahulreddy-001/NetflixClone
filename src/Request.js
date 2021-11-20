const API_KEY = "ff02beb9190ca6bc657d187c91d3b767";

const requests = {
  fetchHBOOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=3186`,
  fetchTreInIndia: `discover/movie?api_key=${API_KEY}&language=te|en-US&region=IN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&watch_region=IN&with_watch_monetization_types=flatrate`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchSonyLivOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=2646`,
  fetchHotstarOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=3919`,
  fetchAhaOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=3758`,
  fetchAmazonOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=1024`,
  fetchZeeTVOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=526`,
  fetchTrendingInMovie: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingInTV: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTVShows: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
