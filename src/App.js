import { ProSidebarProvider, } from "react-pro-sidebar";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from './Components';
import { StoryProvider } from './Components/StoryProvider';

import {
  BrowsePage,
  HomePage,
  MagicPage,
  // GenrePage,
  NewPage,
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
        <StoryProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* genre tbi */}
            {/* <Route path="/Genre/:genre" element={<GenrePage />} /> */}
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/read/:title" element={<MagicPage />} />
            <Route path="/new" element={<NewPage />} />
          </Routes>
        </StoryProvider>
      </div>
    </div>
  );
}

export default App;