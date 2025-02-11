import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import img1 from "../../assets/img-1.avif";
import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";
import img4 from "../../assets/img-4.jpg";

const BannerOne = () => {
  return (
    <div className="w-full overflow-hidden bg-[url(./assets/banner-img.jpg)] bg-no-repeat bg-center bg-cover p-5 lg:p-10">
      <div className="w-full flex flex-col-reverse lg:flex-row gap-10 lg:gap-20">
        <div className="flex-1 flex items-center">
          <div className="bg-white/30 backdrop-blur p-3 border border-white/70 shadow-lg text-darkThree rounded-lg">
            <div className="min-h-11">
              <span className="text-xl md:text-4xl font-bold">
                <Typewriter
                  words={["FIND YOUR LOST ITEM", "SEND YOUR FOUND ITEM"]}
                  loop={false}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
            <p>
              Welcome to <span className="font-semibold">Track & Retrieve</span> - the ultimate platform
              for finding and posting lost or found items. Whether you've
              misplaced something precious or discovered an item, we're here to
              help reconnect owners with their belongings. Start your search or
              create a post today and make a difference!
            </p>

            <div className="w-full mt-4 grid grid-cols-2 gap-3">
              <Link to="/addItems">
                <button className="btn w-full bg-white border-none hover:bg-gray-50 text-darkThree">LOST</button>
              </Link>
              <Link to="/addItems">
                <button className="btn w-full bg-white border-none hover:bg-gray-50 text-darkThree">FOUND</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-full flex items-center">
            <div className="grid grid-cols-2">
              <motion.img
                initial={{
                  y: 0,
                }}
                animate={{
                  y: [0, -30, 0],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                  },
                }}
                className="w-full h-full object-cover rounded-t-[50px] rounded-l-[50px]"
                src={img1}
                alt=""
              />
              <motion.img
                initial={{
                  y: 0,
                }}
                animate={{
                  x: [0, 30, 0],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                  },
                }}
                className="w-full h-full object-cover rounded-t-[50px] rounded-r-[50px]"
                src={img2}
                alt=""
              />
              <motion.img
                initial={{
                  y: 0,
                }}
                animate={{
                  x: [0, -30, 0],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                  },
                }}
                className="w-full h-full object-cover rounded-b-[50px] rounded-l-[50px]"
                src={img3}
                alt=""
              />
              <motion.img
                initial={{
                  y: 0,
                }}
                animate={{
                  y: [0, 30, 0],
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                  },
                }}
                className="w-full h-full object-cover rounded-b-[50px] rounded-r-[50px]"
                src={img4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
