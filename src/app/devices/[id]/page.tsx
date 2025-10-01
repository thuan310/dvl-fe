"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";

// Mock data for the device stats
const deviceStats = [
  {
    label: "Stat",
    value: "600+",
  },
  {
    label: "Stat",
    value: "600+",
  },
  {
    label: "Stat",
    value: "600+",
  },
];

// Mock data for device schedules
const schedules = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  date: "Ngày",
  time: "Thời gian",
  status: "Trạng thái",
}));

export default function DeviceDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="Thông tin thiết bị" />
      
      <div className="grid gap-8">
        {/* Device Info Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Device Image */}
          <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark md:col-span-1">
            <div className="aspect-square w-full bg-gray-100 dark:bg-gray-800">
              <div className="flex h-full items-center justify-center">
                <svg
                  className="h-24 w-24 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Device Info */}
          <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:col-span-2">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">
                  Tên thiết bị
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Miêu tả
                </p>
              </div>
              <Link
                href={`/schedule/book?device=${params.id}`}
                className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-white hover:bg-opacity-90"
              >
                Đặt lịch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {deviceStats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-sm border border-stroke bg-gray-50 p-4 dark:border-strokedark dark:bg-meta-4"
                >
                  {/* <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                    <svg
                      className="fill-primary dark:fill-white"
                      width="22"
                      height="16"
                      viewBox="0 0 22 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z" fill="" />
                    </svg>
                  </div> */}
                  {/* <span className="mt-4 block text-2xl font-bold text-black dark:text-white">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm">{stat.label}</span> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Device Details Section */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-6">
            <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
              Chi tiết
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Chi tiết
            </p>
          </div>
        </div>

        {/* Device Schedule Section */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-6">
            <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
              Các lịch đặt thiết bị này
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-50 dark:bg-meta-4">
                    <th className="px-4 py-4 text-left font-medium text-black dark:text-white">
                      ID
                    </th>
                    <th className="px-4 py-4 text-left font-medium text-black dark:text-white">
                      Ngày
                    </th>
                    <th className="px-4 py-4 text-left font-medium text-black dark:text-white">
                      Thời gian
                    </th>
                    <th className="px-4 py-4 text-left font-medium text-black dark:text-white">
                      Trạng thái
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedules.map((schedule) => (
                    <tr key={schedule.id}>
                      <td className="border-t border-stroke px-4 py-5 dark:border-strokedark">
                        {schedule.id}
                      </td>
                      <td className="border-t border-stroke px-4 py-5 dark:border-strokedark">
                        {schedule.date}
                      </td>
                      <td className="border-t border-stroke px-4 py-5 dark:border-strokedark">
                        {schedule.time}
                      </td>
                      <td className="border-t border-stroke px-4 py-5 dark:border-strokedark">
                        {schedule.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}