import { BrowserRouter, Route, Routes } from "react-router-dom";
import StyledComponentsPage from "./styled-components/StyledComponentsPage";
import CssModulesPage from "./css-modules/CssModulesPage";
import CssGlobalPage from "./css-global/CssGlobalPage";
import TailwindPage from "./tailwind/TailwindPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/css-modules" element={<CssModulesPage />} />
        <Route path="/css-global" element={<CssGlobalPage />} />
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="/styled-component" element={<StyledComponentsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
