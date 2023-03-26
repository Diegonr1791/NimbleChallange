import { Flex } from "@chakra-ui/react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/Navbar/Navbar";

const HomepageMovies = lazy(() => import("../pages/HomeMovies"));
const CategoriesMovies = lazy(() => import("../pages/CategoriesMovies"));
const DetailsMovie = lazy(() => import("../pages/DetailsMovie"));

const Router = () => {
  return (
    <BrowserRouter basename="">
      <Flex flexDir="column" flex="1" >
        <Header />
        <Flex flex="1">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomepageMovies />} />
            <Route path="/Home" element={<HomepageMovies />} />
            <Route path="/Categories" element={<CategoriesMovies />} />
            <Route path="/Details" element={<DetailsMovie />} />
          </Routes>
        </Flex>
      </Flex>
    </BrowserRouter>
  );
};

export default Router;
