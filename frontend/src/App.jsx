import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import RequestBoQ from "./pages/RequestBoQ";
import PostProject from "./pages/PostProject";
import ProjectsList from "./pages/ProjectsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="request-boq" element={<RequestBoQ />} />
          <Route path="projects" element={<ProjectsList />} />
          <Route path="post-project" element={<PostProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;