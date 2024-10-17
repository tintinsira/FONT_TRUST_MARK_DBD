import { useState } from "react";
import { useRouter } from "next/router";

import { LuLayoutDashboard, LuFileSearch, LuSettings } from "react-icons/lu";
import { RiUserVoiceLine } from "react-icons/ri";
import { BsPersonVcard } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiOutlineChartPie } from "react-icons/hi";
import { MdOutlineWeb } from "react-icons/md";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const NavigationMenu = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: (
        <LuLayoutDashboard
          size={35}
          className={`${
            isMenuOpen && "mr-2"
          } hover:bg-[#23206C] rounded-full my-auto p-1`}
        />
      ),
    },
    {
      name: "ตรวจสอบคำขอ",
      path: "/requests",
      icon: (
        <LuFileSearch
          size={35}
          className={`${
            isMenuOpen && "mr-2"
          } hover:bg-[#23206C] rounded-full my-auto p-1`}
        />
      ),
    },
    {
      name: "ตรวจสอบเรื่องร้องเรียน",
      path: "/complaints",
      icon: (
        <RiUserVoiceLine
          size={35}
          className={`${
            isMenuOpen && "mr-2"
          } hover:bg-[#23206C] rounded-full my-auto p-1`}
        />
      ),
    },
    {
      name: "ข้อมูลผู้สมัครสมาชิก",
      path: "/members",
      icon: (
        <BsPersonVcard
          size={35}
          className={`${
            isMenuOpen && "mr-2"
          } hover:bg-[#23206C] rounded-full my-auto p-1`}
        />
      ),
    },
    {
      name: "ค้นหา",
      path: "/search",
      icon: (
        <BiSearchAlt2
          size={35}
          className={`${
            isMenuOpen && "mr-2"
          } hover:bg-[#23206C] rounded-full my-auto p-1`}
        />
      ),
    },
    {
      name: "รายงาน",
      path: "/reports",
      icon: (
        <HiOutlineChartPie
          size={35}
          className={`${
            isMenuOpen && "mr-2"
          } hover:bg-[#23206C] rounded-full my-auto p-1`}
        />
      ),
    },
    {
      name: "การตั้งค่า",
      path: "/settings",
      icon: (
        <LuSettings
          size={35}
          className={`${
            isMenuOpen && "mr-2"
          } hover:bg-[#23206C] rounded-full my-auto p-1`}
        />
      ),
    },
    {
      name: "การจัดการเว็บไซด์",
      path: "/web-management",
      icon: (
        <MdOutlineWeb
          size={35}
          className={`${
            isMenuOpen && "mr-2"
          } hover:bg-[#23206C] rounded-full my-auto p-1`}
        />
      ),
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`${isMenuOpen ? "w-[20%]" : "w-[5%]"} relative duration-500`}
    >
      <div
        className={`${
          isMenuOpen ? "w-[100%] rounded-3xl" : "w-[5%] rounded-full"
        } absolute -left-10  transform 
            bg-gradient-to-b from-[#7184C6] to-[#4B45B0] text-white px-4  z-50  flex flex-col my-auto py-8 `}
      >
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.path)}
            className={`${
              router.pathname === item.path
                ? "bg-[#23206C] rounded-lg text-white"
                : " "
            } ${
              isMenuOpen ? "justify-start mx-1" : "justify-center"
            } w-full flex mb-2 hover:bg-[#23206C] hover:rounded-lg py-2 `}
          >
            <span
              className={`${
                router.pathname === item.path
                  ? "bg-[#23206C] rounded-full text-white"
                  : " "
              } flex`}
            >
              {item.icon}
              {isMenuOpen && <span className="my-auto ml-2">{item.name}</span>}
            </span>
          </button>
        ))}
        <button
          onClick={toggleMenu}
          className={`${
            isMenuOpen ? "justify-end" : "justify-center"
          } w-full flex mt-16`}
        >
          <span className={`flex`}>
            {isMenuOpen && <span className="my-auto">ซ่อนเมนู</span>}
            <MdKeyboardArrowRight
              size={35}
              className={`${
                isMenuOpen && "ml-2 rotate-180"
              } hover:bg-[#23206C] rounded-full my-auto p-1 `}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavigationMenu;
