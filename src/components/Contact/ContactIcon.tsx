import React from "react";

const ContactIcons = () => {
  return (
    <div className="h-full w-full">
      {/* Container for larger screens */}
      <div className="bg-white hidden md:flex flex-col z-[9999] rounded-xl p-1 fixed right-0 top-1/2 transform -translate-y-1/2 space-y-4">
        <a
          aria-label="phone"
          href="sms:+123456789"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"></path>
          </svg>
        </a>
        <a
          aria-label="message"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"></path>
          </svg>
        </a>
        <a
          aria-label="newmessage"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2 border-b border-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
          </svg>
        </a>
        <a
          aria-label="iosmail"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300 pb-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
          </svg>
        </a>
      </div>

      {/* Chat Icon */}
      <div className="fixed z-[9999] hidden md:flex  right-4 bottom-4 md:right-8 md:bottom-8 transform hover:scale-110 transition duration-300">
        <div className="flex justify-center items-center text-white rounded-full bg-[#4d3d78] bg-opacity-50 backdrop-blur-sm p-4 md:p-5">
          chat
        </div>
      </div>

      {/* Container for smaller screens */}
      <div className="bg-white md:hidden flex flex-row justify-between items-center z-[9999] fixed bottom-0 w-full pb-4 p-2">
        <a
          aria-label="phone"
          href="sms:+123456789"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        ></a>
        <a
          aria-label="message"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        ></a>

        <div className="relative flex justify-center items-center">
          <div className="absolute -top-14 flex justify-center items-center text-white rounded-full bg-[#4d3d78] bg-opacity-50 backdrop-blur-sm p-6 transform hover:scale-110 transition duration-300"></div>
        </div>
        <a
          aria-label="iosmail"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        ></a>
        <a
          aria-label="bsmessenger"
          href="mailto:info@example.com"
          className="flex items-center justify-center h-8 w-10 text-black hover:bg-opacity-90 transition duration-300"
        ></a>
      </div>
    </div>
  );
};

export default ContactIcons;
