import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./page/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main></Main>} >
          <Route></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
