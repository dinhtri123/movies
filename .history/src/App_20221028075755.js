import { Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
import PageNotFound from "./page/PageNotFound";
import HomePage from "./page/HomePage";
import MovieDetailsPage from "./page/MovieDetailsPage";
import MoviePage from "./page/MoviePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; 
// const HomePage = lazy(() => import("./page/HomePage"));
// const MovieDetailsPage = lazy(() => import("./page/MovieDetailsPage"));
// const MoviePage = lazy(() => import("./page/MoviePage"));
function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movie" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
