import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
      </Routes>
    </>
  );
}

export default App;
