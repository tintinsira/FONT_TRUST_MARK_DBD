import { useState } from "react";
import Link from "next/link";
import Input from "../components/Input";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ใส่ logic การ login ที่นี่
    Swal.fire({
      title: "สำเร็จ!",
      text: "คุณได้เข้าสู่ระบบแล้ว",
      icon: "success",
      confirmButtonText: "ตกลง",
    });
    console.log("Login attempt", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card shadow-lg p-4 bg-white rounded-lg my-auto lg:w-[500px]">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold mb-4">เข้าสู่ระบบ</h2>
          <hr />
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  อีเมล
                </label>
                <Input
                  type="email"
                  placeholder="อีเมล"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  รหัสผ่าน
                </label>
                <Input
                  type="password"
                  placeholder="รหัสผ่าน"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                เข้าสู่ระบบ
              </button>
              <div className="flex flex-col justify-between md:flex-row max-md:justify-center mt-2 mb-2">
                <div className="flex">
                  <span className="my-2 mr-2 text-sm font-medium">
                    ไม่มีบัญชี?
                  </span>
                  <Link
                    href="#"
                    className="flex justify-center my-2 text-sm font-medium rounded-md text-blue-500 underline hover:font-semibold"
                  >
                    สมัครสามาชิก
                  </Link>
                </div>
                <div className="flex">
                  <Link
                    href="#"
                    className="group relative w-full flex justify-center my-2 mx-4 text-sm font-medium rounded-md text-blue-500 underline hover:font-semibold"
                  >
                    ลืมรหัสผ่าน
                  </Link>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="border-t-2 w-2/5 relative mt-[0.75rem]"></div>
                <div className="w-1/5 flex justify-center">
                  <span>หรือ</span>
                </div>
                <div className="border-t-2 w-2/5 relative mt-[0.75rem]"></div>
              </div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
              >
                ThaiD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
