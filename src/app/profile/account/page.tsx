"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

const Account = () => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change logic here
  };

  return (
    <>
      <Breadcrumb pageName="Tài khoản" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* Profile Info */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Tài khoản
              </h3>
            </div>
            <div className="p-7">
              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full">
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Tên
                    </label>
                    <div className="w-full rounded border border-stroke bg-gray py-3 px-4.5 dark:border-strokedark dark:bg-meta-4">
                      John Doe
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email
                    </label>
                    <div className="w-full rounded border border-stroke bg-gray py-3 px-4.5 dark:border-strokedark dark:bg-meta-4">
                      johndoe@example.com
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Vai trò
                    </label>
                    <div className="w-full rounded border border-stroke bg-gray py-3 px-4.5 dark:border-strokedark dark:bg-meta-4">
                      PTN
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Phòng thí nghiệm
                    </label>
                    <div className="w-full rounded border border-stroke bg-gray py-3 px-4.5 dark:border-strokedark dark:bg-meta-4">
                      Phòng thí nghiệm A
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-auto">
                  <div className="relative mx-auto h-40 w-40 rounded-full">
                    {/* <img
                      src="/images/user/user-01.png"
                      alt="User"
                      className="h-full w-full rounded-full object-cover"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Password Change */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Đổi mật khẩu
              </h3>
            </div>
            <div className="p-7">
              <form onSubmit={handleSubmit}>
                <div className="mb-5.5">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Mật khẩu cũ
                  </label>
                  <input
                    type="password"
                    placeholder="Nhập"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={form.oldPassword}
                    onChange={(e) =>
                      setForm({ ...form, oldPassword: e.target.value })
                    }
                  />
                </div>

                <div className="mb-5.5">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Mật khẩu mới
                  </label>
                  <input
                    type="password"
                    placeholder="Nhập"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={form.newPassword}
                    onChange={(e) =>
                      setForm({ ...form, newPassword: e.target.value })
                    }
                  />
                </div>

                <div className="mb-5.5">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Nhập lại mật khẩu mới
                  </label>
                  <input
                    type="password"
                    placeholder="Nhập"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm({ ...form, confirmPassword: e.target.value })
                    }
                  />
                </div>

                <button className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-95">
                  Đổi mật khẩu
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;