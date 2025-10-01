"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { DeviceCard } from "@/components/Cards/device-card";
import Link from "next/link";

// Mock data for the lab stats
const labStats = [
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

// Mock data for devices
const devices = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: "Tên thiết bị",
  description: "Miêu tả",
  status: i % 3 === 0 ? "inactive" : "active",
}));

export default function LabDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="Thông tin phòng thí nghiệm" />
      
      <div className="grid gap-8">
        {/* Lab Info Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Lab Image */}
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Lab Info */}
          <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark md:col-span-2">
            <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">
              Tên
            </h2>
            <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
              Miêu tả
            </p>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4">
              {labStats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-sm border border-stroke bg-gray-50 p-4 dark:border-strokedark dark:bg-meta-4"
                >
                  <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
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
                  </div>
                  <span className="mt-4 block text-2xl font-bold text-black dark:text-white">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm">{stat.label}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Devices Section */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Danh sách thiết bị
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {devices.map((device) => (
              <DeviceCard
                key={device.id}
                name={device.name}
                description={device.description}
                status={device.status as "active" | "inactive"}
                onClick={() => {
                  // Handle device click
                  console.log("Clicked device:", device);
                }}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              className="flex items-center justify-center rounded border border-stroke px-3 py-1.5 text-sm font-medium hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark"
              href="#"
            >
              Trước
            </Link>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <Link
                  key={page}
                  className="flex items-center justify-center rounded border border-stroke px-3 py-1.5 text-sm font-medium hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark"
                  href="#"
                >
                  {page}
                </Link>
              ))}
              <span>...</span>
              <Link
                className="flex items-center justify-center rounded border border-stroke px-3 py-1.5 text-sm font-medium hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark"
                href="#"
              >
                11
              </Link>
            </div>
            <Link
              className="flex items-center justify-center rounded border border-stroke px-3 py-1.5 text-sm font-medium hover:border-primary hover:bg-primary hover:text-white dark:border-strokedark"
              href="#"
            >
              Sau
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}