import React, { useRef, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import posterOne from "../assests/poster1.jpg";
import posterTwo from "../assests/poster2.jpg";
import posterThree from "../assests/poster3.jpg";
import posterFour from "../assests/poster4.jpg";
import posterFive from "../assests/poster5.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  // console.log("rest", rest);
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 top-1/2 mt-8 transform -translate-y-1/2 w-9 h-9 text-white p-2 rounded-full cursor-pointer flex justify-center items-center ml-2 lg:w-16 lg:h-16"
      style={{ backgroundColor: "rgba(236, 0, 140, 1)" }}
    >
      <AiOutlineArrowLeft className="text-xl lg:text-3xl" />
    </button>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  // console.log("customRightArrow props", rest);
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 top-1/2 mt-8 transform -translate-y-1/2 w-9 h-9 text-white p-2 rounded-full cursor-pointer flex justify-center items-center mr-2 lg:w-16 lg:h-16"
      style={{ backgroundColor: "rgba(236, 0, 140, 1)" }}
    >
      <AiOutlineArrowRight className="text-xl lg:text-3xl" />
    </button>
  );
};

const VideoCarousel = () => {
  const videoRefs = useRef([]);
  const [showPoster, setShowPoster] = useState(true);

  const handleVideoPlay = (videoIndex) => {
    setShowPoster(false);
    const video = videoRefs.current[videoIndex];

    if (video) {
      video.play().catch((error) => {
        // Handle any errors that may occur when playing the video
        console.error("Error playing video:", error);
      });
    }
  };

  // const videos = [
  //   "https://res.cloudinary.com/da05bn5ub/video/upload/v1693550326/reel1_vt4rvj.mp4",
  //   "https://res.cloudinary.com/da05bn5ub/video/upload/v1693550351/reel2_avltki.mp4",
  //   "https://res.cloudinary.com/da05bn5ub/video/upload/v1693550379/reel3_svedcy.mp4",
  //   "https://res.cloudinary.com/da05bn5ub/video/upload/v1693550446/reel4_s0v3m9.mp4",
  //   "https://res.cloudinary.com/da05bn5ub/video/upload/v1693550451/reel5_biswnp.mp4",
  // ];

  const videos = [
    {
      id: 1,
      poster: posterTwo,
      source:
        "https://res.cloudinary.com/da05bn5ub/video/upload/v1693550326/reel1_vt4rvj.mp4",
    },
    {
      id: 2,
      poster: posterOne,
      source:
        "https://res.cloudinary.com/da05bn5ub/video/upload/v1693550351/reel2_avltki.mp4",
    },
    {
      id: 3,
      poster: posterFive,
      source:
        "https://res.cloudinary.com/da05bn5ub/video/upload/v1693550379/reel3_svedcy.mp4",
    },
    {
      id: 4,
      poster: posterFour,
      source:
        "https://res.cloudinary.com/da05bn5ub/video/upload/v1693550446/reel4_s0v3m9.mp4",
    },
    {
      id: 5,
      poster: posterThree,
      source:
        "https://res.cloudinary.com/da05bn5ub/video/upload/v1693550451/reel5_biswnp.mp4",
    },
  ];

  // const poster = [2, 1, 5, 4, 3];

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  // const handleVideoPlay = (video) => {
  //   setPlayingVideo(video);
  // };

  return (
    <div
      className="w-full p-4"
      style={{ backgroundColor: "#f8f4fc" }}
      id="about"
    >
      <div
        className="text-3xl text-center font-semibold mt-6 lg:mt-16 lg:text-5xl"
        style={{ fontFamily: "montserrat" }}
      >
        About the Event
      </div>
      <div
        className="w-11/12 m-auto text-sm text-center font-normal mt-4 lg:text-2xl lg:mt-6"
        style={{ fontFamily: "montserrat" }}
      >
        ACETECH is Asia’s leading trade fair for architecture, building
        materials, art and design, the third-of-its-kind in the world. Our
        unique forum offers opportunities to not just exhibit, but also to
        create a long-lasting impression on the decision-makers of the
        architectural industry.
      </div>
      <button
        className="text-lg text-white w-32 h-9 mt-6 mb-6 lg:mr-10 font-medium font-Jacques Francois lg:w-40 lg:h-12 lg:mb-20 lg:text-2xl lg:mt-12"
        style={{
          fontFamily: "montserrat",
          borderRadius: "36px",
          backgroundColor: hover ? "#FF55C1" : "#FF00A3",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Book Now
      </button>
      <Carousel
        responsive={responsive}
        swipeable
        arrows
        showDots
        centerMode
        infinite
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="mt-20 px-2 w-full h-60 lg:h-[550px] lg:pt-20 lg:px-4"
            style={{ marginTop: "20px" }}
          >

              <video
                className="rounded-lg h-full video-carousel"
                preload="auto"
                autoPlay="autoplay"
                loop
                muted
                playsInline
                poster={video.poster}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  padding: "0px 10px 0px 10px",
                  borderRadius: "20px",
                }}
                onLoadedData={() => handleVideoPlay(index)}
              >
                <source src={video.source} />
                Your browser does not support the video tag.
              </video>
            {/* )} */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
