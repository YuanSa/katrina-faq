import { Route, Routes } from "react-router-dom";
import { Editor } from "./page/Editor";
import { Welcome } from "./page/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="/edit" element={<Editor />}></Route>
    </Routes>
  );
}

export default App;
