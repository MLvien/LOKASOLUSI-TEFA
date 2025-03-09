/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";

const Setting = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Settings className="w-12 h-12 text-green-500 mb-2 animate-bounce" />
          <h1 className="text-3xl font-semibold">Settings Page</h1>
          <p className="text-gray-600">Adjust your preferences here.</p>
        </motion.div>
      </div>
    </>
  );
};

export default Setting;
