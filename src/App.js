import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SingleDog from "./components/SingleDog";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <>
      <TopHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog/:name" element={<SingleDog />} />
      </Routes>
    </>
  );
}

export default App;
