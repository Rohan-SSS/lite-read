import React from "react";
import { MediaCard } from "../../Components/"; // Assuming the card component is in the same directory
import "./Home.css";

const cardData = [
  {
    title: "86-EIGHTY-SIX",
    imageUrl:
      "https://pm1.aminoapps.com/7834/07b4133a62bee87659a3a529a395812267593b10r1-1536-2048v2_hq.jpg",
    alt: "86-eighty-six",
    readLink: "86-eighty-six",
    malLink: "https://myanimelist.net/manga/104039/86",
  },
  {
    title: "86-EIGHTY-SIX",
    imageUrl:
      "https://pm1.aminoapps.com/7834/07b4133a62bee87659a3a529a395812267593b10r1-1536-2048v2_hq.jpg",
    alt: "86-eighty-six",
    readLink: "86-eighty-six",
    malLink: "https://myanimelist.net/manga/104039/86",
  },
  {
    title: "86-EIGHTY-SIX",
    imageUrl:
      "https://pm1.aminoapps.com/7834/07b4133a62bee87659a3a529a395812267593b10r1-1536-2048v2_hq.jpg",
    alt: "86-eighty-six",
    readLink: "86-eighty-six",
    malLink: "https://myanimelist.net/manga/104039/86",
  },
  {
    title: "86-EIGHTY-SIX",
    imageUrl:
      "https://pm1.aminoapps.com/7834/07b4133a62bee87659a3a529a395812267593b10r1-1536-2048v2_hq.jpg",
    alt: "86-eighty-six",
    readLink: "86-eighty-six",
    malLink: "https://myanimelist.net/manga/104039/86",
  },
  {
    title: "86-EIGHTY-SIX",
    imageUrl:
      "https://pm1.aminoapps.com/7834/07b4133a62bee87659a3a529a395812267593b10r1-1536-2048v2_hq.jpg",
    alt: "86-eighty-six",
    readLink: "86-eighty-six",
    malLink: "https://myanimelist.net/manga/104039/86",
  },
  {
    title: "86-EIGHTY-SIX",
    imageUrl:
      "https://pm1.aminoapps.com/7834/07b4133a62bee87659a3a529a395812267593b10r1-1536-2048v2_hq.jpg",
    alt: "86-eighty-six",
    readLink: "86-eighty-six",
    malLink: "https://myanimelist.net/manga/104039/86",
  },
  {
    title: "86-EIGHTY-SIX",
    imageUrl:
      "https://pm1.aminoapps.com/7834/07b4133a62bee87659a3a529a395812267593b10r1-1536-2048v2_hq.jpg",
    alt: "86-eighty-six",
    readLink: "86-eighty-six",
    malLink: "https://myanimelist.net/manga/104039/86",
  },
  {
    title: "86-EIGHTY-SIX",
    imageUrl:
      "https://pm1.aminoapps.com/7834/07b4133a62bee87659a3a529a395812267593b10r1-1536-2048v2_hq.jpg",
    alt: "86-eighty-six",
    readLink: "86-eighty-six",
    malLink: "https://myanimelist.net/manga/104039/86",
  },
  {
    title: "86-EIGHTY-SIX",
    imageUrl:
      "https://pm1.aminoapps.com/7834/07b4133a62bee87659a3a529a395812267593b10r1-1536-2048v2_hq.jpg",
    alt: "86-eighty-six",
    readLink: "86-eighty-six",
    malLink: "https://myanimelist.net/manga/104039/86",
  },
  {
    title: "86-EIGHTY-SIX",
    imageUrl:
      "https://pm1.aminoapps.com/7834/07b4133a62bee87659a3a529a395812267593b10r1-1536-2048v2_hq.jpg",
    alt: "86-eighty-six",
    readLink: "86-eighty-six",
    malLink: "https://myanimelist.net/manga/104039/86",
  },
];

const HomePage = () => {
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
              imageUrl={data.imageUrl}
              alt={data.alt}
              readlink={data.readLink}
              mallink={data.malLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
