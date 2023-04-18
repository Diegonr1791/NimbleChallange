import { Flex } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import { originalColors } from "@/theme/palette";
import Loading from "@/components/Loading";

const HomeMoviesPage = lazy(() => import("../pages/Home/HomePage"));
const CategoriesMoviePage = lazy(
  () => import("../pages/Movies/CategoriesPage")
);
const MovieDetailsPage = lazy(() => import("../pages/Movies/DetailsPage"));

const Router = () => {
  return (
    <BrowserRouter basename="">
      <Flex flexDir="column" flex="1" bgColor={originalColors.darkgrey}>
        <Header />
        <Flex flex="1">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomeMoviesPage />} />
              <Route path="/home" index element={<HomeMoviesPage />} />
              <Route path="/categories" element={<CategoriesMoviePage />} />
              <Route path="/detail/:id" element={<MovieDetailsPage />} />
            </Routes>
          </Suspense>
        </Flex>
      </Flex>
    </BrowserRouter>
  );
};

export default Router;
