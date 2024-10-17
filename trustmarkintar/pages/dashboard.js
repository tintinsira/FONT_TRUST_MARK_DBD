// pages/dashboard.js
import Image from "next/image";
import LayoutAfterLogin from "../components/layout/LayoutAfterLogin";

const Dashboard = () => {
  return (
    <LayoutAfterLogin>
      <h2 className="text-[#242083]">
        จำนวนร้านค้าค้าที่ได้รับเครื่องหมาย(ทั้งหมด)
      </h2>
      <div className="flex  mt-4 gap-4">
        <div className="basis-4/5 border border-white p-4 rounded-xl flex gap-4">
          <div className="bg-white rounded-xl w-1/4 p-4 flex flex-col align-middle justify-center text-center text-2xl gap-3">
            <label>
              <Image
                src="/images/dbdRegisteredLogo.png"
                alt="dbdRegisteredLogo"
                width={150}
                height={300}
                className="m-auto w-auto h-auto"
              />
            </label>
            <span>
              <font className="font-bold text-4xl">10</font> ร้านค้า
            </span>
            <span>DBD REGISTERED</span>
          </div>
          <div className="bg-white rounded-xl w-1/4 p-4 flex flex-col align-middle justify-center text-center text-2xl gap-3">
            <label>
              <Image
                src="/images/dbdSilverLogo.png"
                alt="dbdSilverLogo"
                width={150}
                height={300}
                className="m-auto w-auto h-auto"
              />
            </label>
            <span>
              <font className="font-bold text-4xl">10</font> ร้านค้า
            </span>
            <span>DBD SILVER</span>
          </div>
          <div className="bg-white rounded-xl w-1/4 p-4 flex flex-col align-middle justify-center text-center text-2xl gap-3">
            <label>
              <Image
                src="/images/dbdGoldLogo.png"
                alt="dbdGoldLogo"
                width={150}
                height={300}
                className="m-auto w-auto h-auto"
              />
            </label>
            <span>
              <font className="font-bold text-4xl">10</font> ร้านค้า
            </span>
            <span>DBD GOLD</span>
          </div>
          <div className="bg-white rounded-xl w-1/4 p-4 flex flex-col align-middle justify-center text-center text-2xl gap-3">
            <label>
              <Image
                src="/images/dbdPlatinumLogo.png"
                alt="dbdPlatinumLogo"
                width={150}
                height={300}
                className="m-auto w-auto h-auto"
              />
            </label>
            <span>
              <font className="font-bold text-4xl">10</font> ร้านค้า
            </span>
            <span>DBD PLATINUM</span>
          </div>
        </div>
        <div className="basis-1/5 bg-white rounded-xl flex flex-col text-center p-4 gap-2">
          <div className="my-auto ">
            <span className="text-[#242083] text-2xl">สถิติของฉัน</span>
            <div className="flex flex-col text-[#242083]">
              <div className="flex justify-between">
                <label>
                  <Image
                    src="/images/dbdRegisteredLogo.png"
                    alt="dbdRegisteredLogo"
                    width={100}
                    height={75}
                    className="mx-0 my-auto w-auto h-auto"
                  />
                </label>
                <span className="my-auto">
                  <font className="font-bold text-xl">10</font> ร้านค้า
                </span>
              </div>
              <div className="flex justify-between">
                <label>
                  <Image
                    src="/images/dbdSilverLogo.png"
                    alt="dbdSilverLogo"
                    width={100}
                    height={75}
                    className="m-auto w-auto h-auto"
                  />
                </label>
                <span className="my-auto">
                  <font className="font-bold text-xl">10</font> ร้านค้า
                </span>
              </div>
              <div className="flex justify-between">
                <label>
                  <Image
                    src="/images/dbdGoldLogo.png"
                    alt="dbdGoldLogo"
                    width={100}
                    height={75}
                    className="m-auto w-auto h-auto"
                  />
                </label>
                <span className="my-auto">
                  <font className="font-bold text-xl">5</font> ร้านค้า
                </span>
              </div>
              <div className="flex justify-between">
                <label>
                  <Image
                    src="/images/dbdPlatinumLogo.png"
                    alt="dbdPlatinumLogo"
                    width={100}
                    height={75}
                    className="m-auto w-auto h-auto"
                  />
                </label>
                <span className="my-auto">
                  <font className="font-bold text-xl">1</font> ร้านค้า
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAfterLogin>
  );
};

export default Dashboard;
