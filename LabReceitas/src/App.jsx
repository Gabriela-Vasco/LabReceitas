import "./App.css"
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;