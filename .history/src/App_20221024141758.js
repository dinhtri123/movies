import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./page/HomePage";
import MovieDetailsPage from "./page/MovieDetailsPage";
import MoviePage from "./page/MoviePage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movie" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
