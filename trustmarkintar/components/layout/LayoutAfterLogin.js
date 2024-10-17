// components/Layout.js
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "./NavigationMenu";

const LayoutAfterLogin = ({ children }) => {
  return (
    <div
      className="w-full h-full bg-[#F7F8FD] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bgapp.png')" }}
    >
      <header className="flex justify-between bg-gradient-to-br from-white  to-[#c9cade] rounded-md px-4 drop-shadow-lg">
        <div className="flex flex-row my-auto ">
          <Image
            src="/images/tmlogo.png"
            alt="tmlogo"
            width={150}
            height={300}
            className="mx-0 w-[10%] h-[50%]"
          />
          <span className="text-xl text-[#23206B] my-auto">
            ระบบออกเครื่องหมายรับรองและตรวจสอบการมีตัวตน
            และความน่าเชื่อถือในการประกอบธุรกิจพาณิชย์อิเล็กทรอนิกส์
          </span>
        </div>
        <div className="flex justify-end my-2 w-1/4">
          <Link
            href="#"
            className="cursor-pointer border-none hover:bg-[#23206C] rounded-full my-auto p-1 text-white no-underline flex w-auto px-4 py-2"
          >
            นายทดสอบ ระบบ
          </Link>
        </div>
      </header>
      <div className="flex mx-8 my-4 justify-end text-[#5B2D90]">
        <small>
          หน่วยงาน : กองพัฒนาระบบงานสารเทศ วันศุกร์ที่ 28 สิงหาคม 2567 13:31:44
        </small>
      </div>
      <div className="mt-2 mb-8 mx-auto flex border border-purple-300 py-4 px-8 rounded-xl shadow-purple min-h-[80vh] max-w-[95%] ">
        <NavigationMenu />
        <div className={`w-full`}>
          <main>{children}</main>
        </div>
      </div>
      <footer>
        <div className="text-center">
          <p>© 2024 Department of Business Development</p>
        </div>
      </footer>
    </div>
  );
};

export default LayoutAfterLogin;
