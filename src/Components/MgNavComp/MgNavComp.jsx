import { Button, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { StoryContext } from "../StoryProvider";
import "./MgNavComp.css";

const MgNavComp = ({ title }) => {
  const [noOfVolumes, setNoOfVolumes] = useState(0);
  const [selectedVolume, setSelectedVolume] = useState(1);
  const volumes = Array.from({ length: noOfVolumes }, (_, i) => i + 1);

  useEffect(() => {
    const fetchVolumeData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/novel/${title}/`);
        if (!response.ok) throw new Error("Failed to fetch volume data");
        const novelData = await response.json();
        setNoOfVolumes(novelData.noOfVolumes);
      } catch (err) {
        console.error("Failed to fetch volume data:", err);
      }
    };
    fetchVolumeData();
  }, [title]);

  const [noOfChapters, setNoOfChapters] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const chapters = Array.from({ length: noOfChapters }, (_, i) => i + 1);

  useEffect(() => {
    const fetchChapterData = async () => {
      if (!selectedVolume) return;

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/novel/${title}/volume/${selectedVolume}`
        );
        if (!response.ok) throw new Error("Failed to fetch chapter data");

        const volumeData = await response.json();
        setNoOfChapters(volumeData.noOfChapters);
      } catch (err) {
        console.error("Failed to fetch chapter data:", err);
      }
    };

    fetchChapterData();
  }, [title, selectedVolume]);

  const [noOfPages, setNoOfPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);
  const pages = Array.from({ length: noOfPages }, (_, i) => i + 1);

  useEffect(() => {
    const fetchPageData = async () => {
      if (!selectedVolume || !selectedChapter) return;

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/novel/${title}/volume/${selectedVolume}/chapter/${selectedChapter}`
        );
        if (!response.ok) throw new Error("Failed to fetch page data");

        const chapterData = await response.json();
        setNoOfPages(chapterData.noOfPages);
      } catch (err) {
        console.error("Failed to fetch page data:", err);
      }
    };

    fetchPageData();
  }, [title, selectedVolume, selectedChapter]);

  const { changeStory } = useContext(StoryContext);

  return (
    <div className="nav-container">
      <div className="nav-heading">{title}</div>
      <div className="nav-nav">
        <div className="nav-volume">
          <h7 className="nav-volume-heading">Volume</h7>
          <Grid
            className="nav-volume-items"
            container
            justifyContent="flex-start"
            style={{
              width: "100%",
              padding: "4px 0px 4px 0px",
            }}
          >
            {volumes.map((volume) => (
              <Grid item xs="auto" key={volume} sx={{ paddingLeft: "auto" }}>
                <Button
                  variant={volume === selectedVolume ? "contained" : ""}
                  style={{
                    backgroundColor:
                      volume === selectedVolume ? "#3f51b5" : "transparent", // Assuming #3f51b5 as primary color
                    color: volume === selectedVolume ? "#fff" : "#3f51b5",
                  }}
                  onClick={() => {
                    setSelectedVolume(volume);
                    setSelectedChapter(1);
                    changeStory(title, volume, selectedChapter, selectedPage);
                  }}
                >
                  {`${volume}`}
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>

        <div className="nav-chapter">
          <h7 className="nav-chapter-heading">Chapter</h7>
          <Grid
            className="nav-chapter-items"
            container
            justifyContent="flex-start"
            style={{
              width: "100%",
              padding: "4px 0px 4px 0px",
            }}
          >
            {chapters.map((chapter) => (
              <Grid item xs="auto" key={chapter} sx={{ paddingLeft: "auto" }}>
                <Button
                  variant={chapter === selectedChapter ? "contained" : ""}
                  style={{
                    backgroundColor:
                      chapter === selectedChapter ? "#3f51b5" : "transparent",
                    color: chapter === selectedChapter ? "#fff" : "#3f51b5",
                  }}
                  onClick={() => {
                    setSelectedChapter(chapter);
                    setSelectedPage(1);
                    changeStory(title, selectedVolume, chapter, selectedPage);
                  }}
                >
                  {`${chapter}`}
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>

        <div className="nav-page">
          <h7 className="nav-page-heading">Page</h7>
          <Grid
            className="nav-page-items"
            container
            justifyContent="flex-start"
            style={{
              width: "100%",
              padding: "4px 0px 4px 0px",
            }}
          >
            {pages.map((page) => (
              <Grid item xs="auto" key={page} sx={{ paddingLeft: "auto" }}>
                <Button
                  variant={page === selectedPage ? "contained" : ""}
                  style={{
                    backgroundColor:
                      page === selectedPage ? "#3f51b5" : "transparent",
                    color: page === selectedPage ? "#fff" : "#3f51b5",
                  }}
                  onClick={() => {
                    setSelectedPage(page);
                    changeStory(title, selectedVolume, selectedChapter, page);
                  }}
                >
                  {`${page}`}
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default MgNavComp;
