import { memo } from "react";


const ProfileGroup = memo(() => {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      <img
        className="w-10 h-10 border-2 border-white rounded-full dark:border-white"
        src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
        alt=""
      />
      <img
        className="w-10 h-10 border-2 border-white rounded-full dark:border-[FFFFFF]"
        src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
        alt=""
      />
      <img
        className="w-10 h-10 border-2 border-white rounded-full dark:border-white"
        src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
        alt=""
      />
      <a
        className="
            flex items-center justify-center w-10 h-10 text-xs font-medium text-[#fff9fa]
            bg-[#D25B68] border-2 border-white rounded-full"
        href="#"
      >
        +99
      </a>
    </div>
  );
});

export default ProfileGroup;
