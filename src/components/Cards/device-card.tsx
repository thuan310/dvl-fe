"use client";

interface DeviceCardProps {
  name: string;
  description: string;
  status: "active" | "inactive";
  imageUrl?: string;
  onClick?: () => void;
}

export function DeviceCard({ name, description, status, imageUrl, onClick }: DeviceCardProps) {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark"
    >
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-sm bg-gray-100 dark:bg-gray-800">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <svg
              className="h-16 w-16 text-gray-400"
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
        )}
      </div>

      <div>
        <h3 className="mb-1.5 text-lg font-semibold text-black dark:text-white">
          {name}
        </h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center">
          <span
            className={`mr-2 h-2.5 w-2.5 rounded-full ${
              status === "active" ? "bg-success" : "bg-danger"
            }`}
          ></span>
          <span className="text-sm font-medium">
            {status === "active" ? "Hoạt động" : "Không hoạt động"}
          </span>
        </div>
      </div>
    </div>
  );
}