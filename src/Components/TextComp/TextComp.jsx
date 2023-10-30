import React, { useEffect, useState } from "react";
import "./TextComp.css";

const TextComp = () => {
  const [textData, setTextData] = useState("");

  useEffect(() => {
    // Fetch the text data when the component mounts
    const fetchTextData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/story");
        const data = await response.json();
        setTextData(data.text);
      } catch (error) {
        console.error("Failed to fetch text data:", error);
      }
    };

    fetchTextData();
  }, []);

  return (
    <div className="text-container">
      {/* <p>{textData}</p> */}
      <p>
        In a sleepy town named Verdentville, nestled between rolling hills and
        dense woodlands, lived an old clockmaker named Mr. Thorne. His shop was
        the oldest in the town, a quaint little building with ivy crawling up
        its stone walls and a large wooden clock that towered above its
        entrance. The townsfolk adored him, for he had a peculiar talent: every
        clock he made possessed a unique charm, making it more than just a
        time-telling device.
      </p>
      <p>
        One day, a curious young girl named Lila entered his shop. Her eyes
        widened as she took in the array of clocks, each one more mesmerizing
        than the last. Grandfather clocks with intricate carvings, cuckoo clocks
        that sang melodies, and pocket watches that sparkled under the dim
        light. Drawn to a peculiar wall clock shaped like a crescent moon, she
        asked, "Mr. Thorne, how do you make such wondrous clocks?"
      </p>
      <p>
        Mr. Thorne, who was hunched over his workbench, looked up, his eyes
        twinkling. "Ah, dear Lila, it's all about listening," he replied.
      </p>
      <p>"Listening?" Lila echoed, puzzled.</p>
      <p>
        "Yes. You see, every tick and tock tells a story. I listen to the
        whispers of time and infuse those stories into my creations. That's what
        makes them special."
      </p>
      <p>
        Lila's eyes widened in wonder. "Can I listen too?" she asked eagerly.
      </p>
      <p>
        Mr. Thorne smiled, handing her a small, unfinished clock. "Close your
        eyes and listen closely. The universe has many tales to share."
      </p>
      <p>
        As Lila pressed the clock to her ear, she felt a rush of memories and
        emotions—laughter, love, sorrow, and hope. It was as if the essence of
        life itself was contained within that tiny device. When she finally
        opened her eyes, tears streamed down her cheeks.
      </p>
      <p>
        "Thank you, Mr. Thorne," she whispered. "I'll cherish this forever."
      </p>
      <p>
        And so, in the heart of Verdentville, the legend of the clockmaker's
        magic continued, reminding everyone that time is not just about hours
        and minutes, but about the stories that define our lives.
      </p>
    </div>
  );
};

export default TextComp;
