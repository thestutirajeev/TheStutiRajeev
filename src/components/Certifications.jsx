import React, { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Apna from "../assets/certificates/Apna.png";
import Delloitte from "../assets/certificates/Deloitte.png";
import PE from "../assets/certificates/PE.png";
import PQ from "../assets/certificates/PQ.png";
import Digipodium from "../assets/certificates/Digipodium.png";
import bg from "../assets/bg2.png"; 
const certificates = [
  {
    img: Digipodium,
    title: "Android Development Internship",
  },
  {
    img: PQ,
    title: "Java Development Internship",
  },
  {
    img: PE,
    title: "Prompt Engineering Certification",
  },
  {
    img: Delloitte,
    title: "Deloitte Australia Technology Job Simulation",
  },
  {
    img: Apna,
    title: "Data Structures and Algorithms Certification",
  },
  // Add more if needed
];

const Certifications = () => {
  const [zoomedImg, setZoomedImg] = useState(null);
  const sliderRef = useRef();

  const scrollByAmount = 300;

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  return (
    <section className="py-12 text-brown-900" id="certifications" 
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <h2 className="text-4xl md:text-5xl font-bold text-brown-700 mb-12 text-center">My Certifications</h2>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Slider container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 px-2 py-6 scroll-smooth snap-x snap-mandatory"
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setZoomedImg(cert.img)}
              className="flex-shrink-0 w-72 bg-white shadow-md hover:shadow-xl transition cursor-pointer rounded-lg p-4 snap-start"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="h-56 w-full object-contain mb-3"
              />
              <p className="text-center font-medium">{cert.title}</p>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-brown-100"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-brown-100"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Zoom Modal */}
      {zoomedImg && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative max-w-5xl w-full px-6">
            <button
              className="absolute top-4 right-4 bg-white p-1 rounded-full shadow hover:bg-brown-100"
              onClick={() => setZoomedImg(null)}
            >
              <X size={24} />
            </button>
            <img
              src={zoomedImg}
              alt="Zoomed Certificate"
              className="w-full max-h-[90vh] object-contain rounded-lg border-4 border-brown-500 bg-white"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
