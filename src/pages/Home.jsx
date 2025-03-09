/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Home as HomeIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HomeIcon className="w-16 h-16 text-blue-500 mb-2 animate-bounce" />
          <h1 className="text-4xl font-bold">Welcome Home!</h1>
          <p className="text-gray-600 mt-2">Enjoy browsing through our site.</p>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
