import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MovieDetail from "./pages/MovieDetail";
import Layout from "./components/layout/Layout";
import PlanFormPage from "./pages/PlanFormPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
      <Route path="/" element={<Layout></Layout>}>
      <Route path="planform" element={<PlanFormPage></PlanFormPage>}></Route>
      <Route path="detail/:id" element={<MovieDetailsPage></MovieDetailsPage>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Route>
     

    </Routes>
    </>
  );
}

export default App;
