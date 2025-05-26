import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import Lottie from 'lottie-react'; // If using lottie-react
import Animation from './assets/Animation.json'; // Adjust path as needed
import img1 from './assets/page1.jpg';
import img2 from './assets/25years.jpg';
import begin from './assets/begin.jpg';
import { FaRegHeart } from "react-icons/fa";
import "./App.css";

const pages = [
  {
    title: "Welcome to Our 25th Anniversary Silver Jublie !",
    content: `No one has ever seen god; but if we love one another, God lives in us and his love is made complete in us. \n - 1 John 4:12 
\n கடவுளை எவரும் என்றுமே கண்டதில்லை. நாம் ஒருவர் மற்றவரிடம் அன்பு கொண்டுள்ளோமென்றால் கடவுள் நம்மோடு இணைந்திருப்பார்; அவரது அன்பு நம்மிடம் நிறைவு பெறும்.
- 1  யோவான் 4:12`,
    image: img1,
    imageStyle: { maxWidth: "300px", height: "auto" },
    rsvp: false,
    Lottie: false,
    bgColor: "#8E1616",
  },
  {
    title: "The beginning of a wonderful Journey ",
    content: <>
    <span className="p-10"><p> From the moment we said "I do",</p>
          <p> The stars aligned, the skies turned new.</p>
         <p>  A love so deep, so purely true</p>
          <p> Forever began… with me and you.</p></span>
    </>,
    image: begin,
    imageStyle: { maxWidth: "350px", height: "200px", marginTop: "20px" },
    rsvp: false,
    Lottie: false,
    bgColor: "#A31D1D",
  },
  {
    title: "Chapter 25",
    content: `Twenty-five years of love’s sweet embrace,
\nA journey of joy, time can’t erase.
\nTogether we’ve grown, forever one
\nOur silver story has just begun.`,
    image: img2,
    imageStyle: { maxWidth: "100%", height: "auto", maxHeight: "200px" },
    rsvp: false,
    Lottie: false,
    bgColor: "#A31D1D",
  },
  {
    title: "Celebrate With Us!",
    content: <>
      <p><span style={{ fontWeight: "bold", }}>MASS</span></p>
      <p>Date: May 29th, 2025</p>
      <p>Venue: Dhyana Ashram</p>
      <p>Time: 11 AM onwards</p>
      <br />
      <p><span style={{ fontWeight: "bold", }}>LUNCH</span></p>
      <p>Venue: Juanto Ananti Apartment Santhome</p>
    </>,
    image: null,
    Lottie: true,
    lottieFile: Animation,
    rsvp: true,
    bgColor: "#8E1616",
  },
];

const handleClick = () => {
  const end = Date.now() + 3 * 1000; // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

  const frame = () => {
    if (Date.now() > end) return;

    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame);
  };

  frame();
};

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const { title, content, image, bgColor, rsvp, Lottie: showLottie, lottieFile, imageStyle } = pages[pageIndex];

  const handleNext = () => {
    if (pageIndex < pages.length - 1) setPageIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex((prev) => prev - 1);
  };

  // WhatsApp RSVP message URL
  const whatsappNumber = "919677112811";
  const whatsappMessage = encodeURIComponent(
    `Yes! We Would Love to Join and bless you.`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#F8F2DE] px-4 py-10 relative overflow-x-auto"
      style={{ backgroundColor: "#F8F2DE" }}
    >
      {/* Animated Couple Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-4xl md:text-5xl font-serif mb-6 text-[#A31D1D] tracking-wide"
      >
        Stany & Aruna
      </motion.h1>

      {/* Book Card */}
      <div
        className="relative min-w-[320px] max-w-md shadow-2xl rounded-xl overflow-hidden p-6 flex-shrink-0
                   min-h-[400px] md:min-h-[450px] lg:min-h-[500px]"
        style={{ backgroundColor: bgColor }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full flex flex-col items-center justify-between text-center"
          >
            <div>
              <h2 className="text-2xl font-bold text-white font-serif mb-4 drop-shadow">
                {title}
              </h2>
              <p className="whitespace-pre-wrap text-white font-monospace text-lg leading-relaxed drop-shadow">
                {content}
              </p>
            </div>

            {showLottie ? (
              <div className="mt-6 w-full h-44 md:h-48 lg:h-52 rounded-md overflow-hidden">
                <Lottie
                  animationData={lottieFile || Animation}
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
            ) : image ? (
              <img
                src={image}
                alt={title}
                className="mt-6 object-cover rounded-md shadow-lg max-w-full"
                style={imageStyle || { maxWidth: "100%", height: "160px" }}
              />
            ) : null}

            {/* RSVP Button */}
            {rsvp && (
              <div className="relative mt-6">
                <Button
                  onClick={handleClick}
                  // Uncomment to enable WhatsApp link navigation
                  // href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to Bless!
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handlePrev}
          disabled={pageIndex === 0}
          className="bg-[#A31D1D] text-white px-4 py-2 rounded-md shadow hover:bg-[#D84040] transition disabled:opacity-30"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={pageIndex === pages.length - 1}
          className="bg-[#A31D1D] text-white px-4 py-2 rounded-md shadow hover:bg-[#D84040] transition disabled:opacity-30"
        >
          Next
        </button>
      </div>

      <p className="text-red-900 bg-red-200 rounded-full p-2 flex mt-5 gap-3 items-center justify-center">
        <FaRegHeart /> Developed with love By S.Fabia <FaRegHeart />
      </p>
    </div>
  );
}
