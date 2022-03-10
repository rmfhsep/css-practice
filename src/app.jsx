import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import List from "./pages/List";
import EasterEgg from "./Mission/EasterEgg";
import styled from "styled-components";
import Days from "./Mission/100days";

const Wrap = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Wrap>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<List />} />
          <Route path="/EasterEgg" element={<EasterEgg />} />
          <Route path="/100days" element={<Days />} />
        </Routes>
      </Wrap>
    </BrowserRouter>
  );
}

export default App;
