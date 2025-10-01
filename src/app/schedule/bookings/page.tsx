"use client";
import { Table } from "@/components/Tables/main-table";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useRouter } from "next/navigation";

const columns: {
  name: string;
  key: string;
  cell?: ({ row }: { row: any }) => React.ReactNode;
}[] = [
  {
    name: "Thiết bị",
    key: "name",
  },
  {
    name: "Trạng thái",
    key: "status",
    cell: ({ row }) => (
      <span className={`text-sm font-medium ${
        row.getValue("status") === "Hoạt động" ? "text-success" : "text-danger"
      }`}>
        {row.getValue("status")}
      </span>
    ),
  },
  {
    name: "Phòng thí nghiệm",
    key: "lab",
  },
  {
    name: "Ngày",
    key: "text1",
  },
  {
    name: "Giờ",
    key: "text2",
  },
];

const mockData = Array.from({ length: 3 }, (_, index) => ({
  id: index + 1,
  name: `Thiết bị ` + (index + 1),
  status: "Chờ duyệt",
  lab: `PTN ${index + 1}`,
  text1: "7h 29/9",
  text2: "9h 29/9",
}));

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const filteredData = mockData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <Breadcrumb pageName="Tất cả lịch đặt" />
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4 md:p-6 xl:p-7.5">
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="w-1/3 rounded-lg border border-stroke bg-transparent px-4 py-2 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="max-w-full overflow-x-auto">
              <Table
                data={filteredData}
                columns={columns}
                showNumbers={false}
                enablePagination={true}
                showEntries={true}
                className="w-full table-auto"
                onRowClick={(row) => router.push(`/devices/${row.id}`)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}