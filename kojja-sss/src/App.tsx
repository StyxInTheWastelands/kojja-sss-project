import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Admissions } from "./Admissions";
import {About} from "./About";
import {News} from "./News";
import { Contact } from "./Contact";
import { ScrollToTop } from "./ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}