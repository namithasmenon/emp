
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import Add from "./components/Add";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/add" element={<Add/>} >Add</Route>

      </Routes>
    </>
  );
}

export default App;
