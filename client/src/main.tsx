import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/navbar.tsx";
import About from "./pages/about.tsx";
import Forum from "./pages/forum.tsx";
import ForumHeader from "./components/forum-header.tsx";
import New from "./pages/new.tsx";
import Settings from "./pages/settings.tsx";
import Signup from "./pages/signup.tsx";
import Login from "./pages/login.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./components/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route index path="/" element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="forum" element={<ForumHeader />}>
              <Route index element={<Forum />} />
              <Route path="new" element={<New />} />
              <Route path="settings" element={<Settings />} />
              <Route />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
