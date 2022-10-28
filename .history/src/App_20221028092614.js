import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
import PageNotFound from "./page/PageNotFound";
import HomePage from "./page/HomePage";
import MovieDetailsPage from "./page/MovieDetailsPage";
import MoviePage from "./page/MoviePage";
// const HomePage = lazy(() => import("./page/HomePage"));
// const MovieDetailsPage = lazy(() => import("./page/MovieDetailsPage"));
// const MoviePage = lazy(() => import("./page/MoviePage"));
function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="movies/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="movies/movies-page" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="movies/movie-details-page/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
        <Route path="movie/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
