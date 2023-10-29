import {
  ViewCarouselRounded as BrowseIcon,
  HomeRounded as HomeIcon,
  MenuRounded as MenuIcon,
  LoupeRounded as NewIcon,
  SearchRounded as SearchIcon,
  WhatshotRounded as TrendingIcon,
} from "@mui/icons-material/";
import { React, useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeItem, setActiveItem] = useState(null);
  const handleClicks = () => {
    setIsCollapsed(true);
  };

  const getHoverStyle = (itemId) => ({
    backgroundColor:
      activeItem === itemId ? "rgba(0, 0, 0, 0.4)" : "transparent",
  });

  return (
    <div>
      {!isCollapsed && <div className="overlay" onClick={handleClicks}></div>}
      <Sidebar className="sidebar" rtl={true} collapsed={isCollapsed}>
        <Menu>
          <MenuItem
            style={getHoverStyle("storify")}
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="sidebar-menu"
            icon={<MenuIcon />}
            onMouseEnter={() => setActiveItem("storify")}
            onMouseLeave={() => setActiveItem(null)}
          >
            <h2>lite read</h2>
          </MenuItem>
          <MenuItem
            style={getHoverStyle("home")}
            component={<Link to="/" className="link" onClick={handleClicks} />}
            icon={<HomeIcon />}
            onMouseEnter={() => setActiveItem("home")}
            onMouseLeave={() => setActiveItem(null)}
          >
            home
          </MenuItem>
          <MenuItem
            style={getHoverStyle("trending")}
            component={
              <Link to="/trending" className="link" onClick={handleClicks} />
            }
            icon={<TrendingIcon className="icon" />}
            onMouseEnter={() => setActiveItem("trending")}
            onMouseLeave={() => setActiveItem(null)}
          >
            trending
          </MenuItem>
          <MenuItem
            style={getHoverStyle("new")}
            component={
              <Link to="/new" className="link" onClick={handleClicks} />
            }
            icon={<NewIcon />}
            onMouseEnter={() => setActiveItem("new")}
            onMouseLeave={() => setActiveItem(null)}
          >
            just added
          </MenuItem>
          <MenuItem
            style={getHoverStyle("browse")}
            component={
              <Link to="/browse" className="link" onClick={handleClicks} />
            }
            icon={<BrowseIcon />}
            onMouseEnter={() => setActiveItem("browse")}
            onMouseLeave={() => setActiveItem(null)}
          >
            browse
          </MenuItem>
          <MenuItem
            style={getHoverStyle("search")}
            component={
              <Link to="/Search" className="link" onClick={handleClicks} />
            }
            icon={<SearchIcon />}
            onMouseEnter={() => setActiveItem("search")}
            onMouseLeave={() => setActiveItem(null)}
          >
            search
          </MenuItem>
          {/* <SubMenu className="genre-submenu" label="Genre" icon={<GenreIcon />}>
            {[
              "adventure",
              "comedy",
              "drama",
              "horror",
              "mystery",
              "romance",
              "sci-fi",
              "thriller",
            ].map((genre) => (
              <MenuItem
                key={genre}
                style={getHoverStyle(genre)}
                component={
                  <Link
                    to={`/genre/${genre}`}
                    className="link"
                    onClick={handleClicks}
                  />
                }
                className="genre-submenu"
                onMouseEnter={() => setActiveItem(genre)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {genre}
              </MenuItem>
            ))}
          </SubMenu> */}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Navbar;
