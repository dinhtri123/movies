import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./page/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies-page" ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
