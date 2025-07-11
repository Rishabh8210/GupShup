import React from "react";

const StatusUserCart = ({
  name,
  time,
  imgSrc,
}: {
  name: string;
  time: string;
  imgSrc: string;
}) => {
  return (
    <div className="flex items-center py-3 hover:bg-[#202c33] cursor-pointer group rounded-lg">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <div className="w-14 h-14 border-2 border-orange-500 rounded-full p-[2px]">
          <img
            src={imgSrc}
            alt={name}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 ml-4 overflow-hidden">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-medium truncate">{name}</h2>
          <span className="text-xs text-gray-400 whitespace-nowrap">{time}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400 truncate">Tap to view status update</p>
          <span className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white/60">
            &#x2022;
          </span>
        </div>
      </div>
    </div>
  );
};

export const StatusPage = () => {
  return (
    <div className="flex h-screen text-white">
      <div className="w-[450px] m-0 pl-10 pr-10 pt-2 border-r border-orange-500">
        <div className="overflow-y-auto">
          <div className="flex items-center px-4 py-3 hover:bg-[#170e16] cursor-pointer group rounded-lg">
            <div className="relative w-14 h-14">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img
                  src="/hero-section.jpg"
                  alt="My Status"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-orange-500 w-5 h-5 rounded-full flex items-center justify-center text-black text-xs font-bold border border-black">
                +
              </div>
            </div>
            <div className="pl-4">
              <h2 className="font-medium">My Status</h2>
              <p className="text-sm text-gray-400">Click to add status update</p>
            </div>
          </div>

          <h3 className="text-sm uppercase text-gray-400 px-4 pb-1 pt-4">Recent</h3>
          <StatusUserCart name="Sourav Bhaiya" time="today at 12:00" imgSrc="/hero-section.jpg" />
          <StatusUserCart name="Sourav Bhaiya" time="today at 12:00" imgSrc="/hero-section.jpg" />

          <h3 className="text-sm uppercase text-gray-400 px-4 pb-1 pt-4">Viewed</h3>
          <StatusUserCart name="Sourav Bhaiya" time="today at 12:00" imgSrc="/hero-section.jpg" />
          <StatusUserCart name="Sourav Bhaiya" time="today at 12:00" imgSrc="/hero-section.jpg" />
        </div>
      </div>

      <div className="w-[60vw] flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center">
          <div className="pb-6">
            <div className="w-20 h-20 border-4 border-gray-700 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          <h1 className="text-2xl font-semibold pb-2">Share Status Update</h1>
          <p className="text-sm text-gray-400 pb-4">
            Share photos, videos and text that disappear after 24 hours.
          </p>
          <p className="text-xs text-gray-500 pt-4">
            Your status updates are end-to-end encrypted
          </p>
        </div>
      </div>
    </div>
  );
};
