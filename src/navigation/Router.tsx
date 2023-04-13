import { Flex } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import { originalColors } from "@/theme/palette";
import Loading from "@/components/Loading";

const HomepageMovies = lazy(() => import("../pages/Home/HomeMovies"));
const CategoriesMovies = lazy(() => import("../pages/Movies/CategoriesMovies"));
const DetailsMovie = lazy(() => import("../pages/Movies/DetailsMovie"));

const Router = () => {
  return (
    <BrowserRouter basename="">
      <Flex flexDir="column" flex="1" bgColor={originalColors.darkgrey}>
        <Header />
        <Flex flex="1">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomepageMovies />} />
              <Route path="/home" index element={<HomepageMovies />} />
              <Route path="/categories" element={<CategoriesMovies />} />
              <Route path="/detail/:id" element={<DetailsMovie />} />
            </Routes>
          </Suspense>
        </Flex>
      </Flex>
    </BrowserRouter>
  );
};

export default Router;
