import { ProSidebarProvider, } from "react-pro-sidebar";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from './Components';

import {
  BrowsePage,
  GenrePage,
  HomePage,
  MagicPage,
  SearchPage,
  TrendingPage
} from "./Scenes";

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <ProSidebarProvider>
          <Navbar />
        </ProSidebarProvider>
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Genre/:genre" element={<GenrePage />} />
          <Route path="/Trending" element={<TrendingPage />} />
          <Route path="/Browse" element={<BrowsePage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/read/:title" element={<MagicPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;