import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./pages/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="About" element={<About />} />
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
