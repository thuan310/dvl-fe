"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import { useState } from "react";

// Mock data for device schedules
const schedules = Array.from({ length: 4 }, (_, i) => ({
  deviceName: "Thiết bị",
  date: "Ngày",
  time: "Giờ",
  status: "Trạng thái",
}));

// Mock data for labs
const labs = [
  { id: 1, name: "Phòng thí nghiệm 1" },
  { id: 2, name: "Phòng thí nghiệm 2" },
  { id: 3, name: "Phòng thí nghiệm 3" },
];

// Mock data for devices
const devices = [
  { id: 1, name: "Thiết bị 1" },
  { id: 2, name: "Thiết bị 2" },
  { id: 3, name: "Thiết bị 3" },
];

interface BookingForm {
  lab: string;
  device: string;
  date: string;
  startTime: string;
  endTime: string;
  purpose: string;
}

export default function BookDevicePage() {
  const [form, setForm] = useState<BookingForm>({
    lab: "",
    device: "",
    date: "",
    startTime: "",
    endTime: "",
    purpose: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <Breadcrumb pageName="Đặt lịch thiết bị" />
      
      <div className="grid gap-8">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              CHỌN THIẾT BỊ
            </h3>
          </div>
          <div className="p-6.5">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Lab Selection */}
              <div>
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Phòng thí nghiệm
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-4 py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                    value={form.lab}
                    onChange={(e) => setForm({ ...form, lab: e.target.value })}
                  >
                    <option value="" disabled>
                      Chọn
                    </option>
                    {labs.map((lab) => (
                      <option key={lab.id} value={lab.id}>
                        {lab.name}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Device Selection */}
              <div>
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Thiết bị
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-4 py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                    value={form.device}
                    onChange={(e) => setForm({ ...form, device: e.target.value })}
                  >
                    <option value="" disabled>
                      Chọn
                    </option>
                    {devices.map((device) => (
                      <option key={device.id} value={device.id}>
                        {device.name}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Device Schedule Display */}
            {form.device && (
              <div className="mt-8">
                <div className="mb-4 flex items-center">
                  <div className="h-16 w-16 rounded bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="text-lg font-semibold">Thiết bị - PTN</h4>
                    <div className="mt-2">
                      <p>Các lịch đã đặt</p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="bg-gray-2 text-left dark:bg-meta-4">
                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                          Tên thiết bị
                        </th>
                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                          Ngày
                        </th>
                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                          Giờ
                        </th>
                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                          Trạng thái
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedules.map((schedule, index) => (
                        <tr key={index}>
                          <td className="border-t border-[#eee] py-4 px-4 dark:border-strokedark">
                            {schedule.deviceName}
                          </td>
                          <td className="border-t border-[#eee] py-4 px-4 dark:border-strokedark">
                            {schedule.date}
                          </td>
                          <td className="border-t border-[#eee] py-4 px-4 dark:border-strokedark">
                            {schedule.time}
                          </td>
                          <td className="border-t border-[#eee] py-4 px-4 dark:border-strokedark">
                            {schedule.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Booking Information Form */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              NHẬP THÔNG TIN
            </h3>
          </div>
          <div className="p-6.5">
            <div className="mb-6">
              <DatePickerOne
                label="Ngày"
                value={form.date}
                onChange={(dates) => {
                  if (dates.length > 0) {
                    setForm({ ...form, date: dates[0].toISOString() });
                  }
                }}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Start Time */}
              <div>
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Giờ bắt đầu
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-4 py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                    value={form.startTime}
                    onChange={(e) => setForm({ ...form, startTime: e.target.value })}
                  >
                    <option value="" disabled>
                      Nhập
                    </option>
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                        {`${i.toString().padStart(2, '0')}:00`}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              {/* End Time */}
              <div>
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Giờ kết thúc
                </label>
                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select
                    className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-4 py-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                    value={form.endTime}
                    onChange={(e) => setForm({ ...form, endTime: e.target.value })}
                  >
                    <option value="" disabled>
                      Nhập
                    </option>
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                        {`${i.toString().padStart(2, '0')}:00`}
                      </option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Purpose */}
            <div className="mt-6">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Mục đích sử dụng
              </label>
              <textarea
                rows={6}
                placeholder="Nhập"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-4 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                value={form.purpose}
                onChange={(e) => setForm({ ...form, purpose: e.target.value })}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-white hover:bg-opacity-90"
            >
              Đặt lịch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}