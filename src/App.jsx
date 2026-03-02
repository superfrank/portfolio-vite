import { Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/home/HomePage";
import ArticlePage from "./pages/articles/ArticlePage";
import CustomPage from "./pages/custom/CustomPage";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="custom/:customSlug" element={<CustomPage />} />
        <Route path=":articleSlug" element={<ArticlePage />} />
      </Route>
    </Routes>
  );
};

export default App;
