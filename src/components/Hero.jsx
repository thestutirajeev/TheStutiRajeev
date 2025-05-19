import { motion } from "framer-motion";
import { Download, FolderOpen, Mail } from "lucide-react";
import ProfileImage from "../assets/stuti.png";
import backgroundimage from "../assets/bg1.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brown-700 mb-4 leading-tight">
            Stuti Rajeev
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Structuring Scalable, Secure, and Seamless Solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
  href="/Stuti_Rajeev_Resume.pdf"
  download
  className="flex items-center gap-2 bg-brown-600 text-white px-6 py-2 rounded hover:bg-brown-700 transition"
>
  <Download className="w-5 h-5" />
  View Resume
</a>

<a
  href="https://github.com/thestutirajeev?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 border border-brown-600 text-brown-700 px-6 py-2 rounded hover:bg-brown-100 transition"
>
  <FolderOpen className="w-5 h-5" />
  View Projects
</a>
</div>
        </motion.div>

        {/* Photo Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={ProfileImage}
            alt="Stuti Rajeev"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-[30px] border-brown-600 shadow-xl bg-brown-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
