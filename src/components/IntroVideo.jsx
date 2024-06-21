import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // הוספתי את Link

const IntroVideo = ({ onVideoEnd }) => {
  const [showVideo, setShowVideo] = useState(true); // הוספת State

  useEffect(() => {
    const video = document.getElementById("intro-video");

    if (showVideo) {
      video.addEventListener("ended", onVideoEnd);
      video.play(); // הפעלת הסרטון
    } else {
      video.removeEventListener("ended", onVideoEnd);
      video.pause(); // עצירת הסרטון
    }

    return () => {
      video.removeEventListener("ended", onVideoEnd);
      video.pause();
    };
  }, [showVideo, onVideoEnd]);

  // הוספת כפתור "דלג"
  const handleSkipVideo = () => {
    setShowVideo(false);
    onVideoEnd(); // הפעלת פונקציית onVideoEnd גם כשמדלגים
  };

  return (
    <div
      className="fixed inset-0 bg-black z-50"
      style={{ display: showVideo ? "block" : "none" }} // הצגת/הסתרת ה-div
    >
      <video
        id="intro-video"
        className="w-full h-full object-cover"
        autoPlay
        muted
      >
        <source src="../assets/Vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {showVideo && ( // הצגת כפתור "דלג" רק כשמוצג הסרטון
        <div className="absolute bottom-4 right-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={handleSkipVideo}
          >
            דלג
          </button>
        </div>
      )}
    </div>
  );
};

export default IntroVideo;