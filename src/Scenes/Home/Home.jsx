import React, { useEffect, useState } from "react";
import { MediaCard } from "../../Components/";
import "./Home.css";

const HomePage = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchNovels = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/novels");
        if (!response.ok) {
          throw new Error("Error 404");
        }
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchNovels();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-top">
          <h1>Lite Read</h1>
        </div>
        <div className="card-container">
          {cardData.map((data, index) => (
            <MediaCard
              key={index}
              title={data.title}
              imageUrl={data.imageURL}
              alt={data.alt}
              malLink={data.malLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
