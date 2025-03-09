/* eslint-disable no-unused-vars */
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const Profile = () => {
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
          <User className="w-12 h-12 text-purple-500 mb-2 animate-bounce" />
          <h1 className="text-3xl font-semibold">Profile Page</h1>
          <p className="text-gray-600">View and edit your profile here.</p>
        </motion.div>
      </div>
    </>
  );
};

export default Profile;
