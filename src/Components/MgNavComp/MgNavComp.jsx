import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button, MenuItem, Select } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { StoryContext } from "../StoryProvider";
import "./MgNavComp.css";

const MgNavComp = ({ title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [chapterData, setChapterData] = useState({
    chapter: "",
    pageRange: "",
  });
  const [pages, setPages] = useState([]);

  const storyContext = useContext(StoryContext);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/pages");
    if (!response.ok) throw new Error("Failed to fetch pages");
    const pagesData = await response.json();
    setPages(pagesData);
  };

  const fetchChapterData = async (page) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/chapter-data?page=${page}`
    );
    if (!response.ok) throw new Error("Failed to fetch chapter data");
    const data = await response.json();
    setChapterData(data);
  };

  useEffect(() => {
    const initializeData = async () => {
      try {
        await fetchData();
        await fetchChapterData(currentPage);
        storyContext.changeStory(currentPage);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };

    initializeData();
  }, [currentPage]);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pages.length;

  return (
    <div className="nav-container">
      <div className="nav-heading">{title}</div>
      <div className="nav-buttons">
        <Button
          className="next-button"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, pages.length))
          }
          disabled={isLastPage}
          sx={{
            color: "black",
            ":hover": { background: "rgba(0, 0, 0, 0.4)" },
          }}
        >
          <ArrowForward />
        </Button>
        <div className="nav-jump">
          <Select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            displayEmpty
          >
            {pages.map((page, index) => (
              <MenuItem key={index} value={page}>
                {page}
              </MenuItem>
            ))}
          </Select>
        </div>
        <Button
          className="prev-button"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={isFirstPage}
          sx={{
            color: "black",
            ":hover": { background: "rgba(0, 0, 0, 0.4)" },
          }}
        >
          <ArrowBack />
        </Button>
      </div>
      <div className="nav-current">
        <div className="chapter">chapter {chapterData.chapter} </div>
        <div className="page">
          {"\u00A0"} ({chapterData.pageRange})
        </div>
      </div>
    </div>
  );
};

export default MgNavComp;
