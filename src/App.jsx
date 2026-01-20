import {BrowserRouter, Routes, Route} from "react-router-dom";
import AppLayout from "./layouts/appLayout";
import Home from "./pages/Home";
import MoviesList from "./pages/MoviesList";


function App() {
  const videoRental = "Video Rental"
  return (
    <>
      <BrowserRouter >
      <Routes>
        <Route element={<AppLayout videoRental={videoRental} />}>
        <Route element={<Home />} path="/" />
        <Route element={<MoviesList />} path="/movies"/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
