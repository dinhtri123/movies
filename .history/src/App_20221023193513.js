import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./page/HomePage";
import MoviePage from "./page/MoviePage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies-page" element={<MoviePage></MoviePage>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
