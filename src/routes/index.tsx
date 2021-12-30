import { BrowserRouter, useRoutes } from "react-router-dom";
import Index from "./home/index";
import Detail from "./detail/index";
const routesConfig = [
  { path: "/", element: <Index /> },
  { path: "detail", element: <Detail /> },
]
const BaseRouter = () => {
  let routes = useRoutes(routesConfig);
  return routes;
};

export default () => (
  <BrowserRouter>
    <BaseRouter />
  </BrowserRouter>
);
