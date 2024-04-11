import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HostLayout from "./pages/HostLayout";
import Flights from "./pages/Flights";
import FilterList from "./components/FilterList";
import Stays from "./pages/Stays";
const isLoggedIn = () => {
  return sessionStorage.getItem("isLoggedIn") === "true";
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={"/"} element={<Home />} />
      <Route path={"login"} element={<Login />} />
      <Route path={"signUp"} element={<SignUp />} />
      <Route path={"host"} element={<HostLayout />}>
        <Route index element={<Flights />} />
        <Route path={"filters"} element={<FilterList />} />
        <Route path={"stays"} element={<Stays />} />

        <Route />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
