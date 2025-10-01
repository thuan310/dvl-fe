import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MENU CHÍNH",
    items: [
      {
        title: "Phòng thí nghiệm",
        url: "/labs",
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Thiết bị",
        url: "/devices",
        icon: Icons.FourCircle,
        items: [],
      },
      {
        title: "Lịch đặt",
        icon: Icons.Calendar,
        items: [
          {
            title: "Đặt lịch",
            url: "/schedule/book",
          },
          {
            title: "Lịch đã đặt",
            url: "/schedule/bookings",
          },
        ],
      },
      {
        title: "Điều khiển thiết bị",
        url: "/device-control",
        icon: Icons.Table,
        items: [],
      },
      {
        title: "Tài khoản",
        url: "/profile/account",
        icon: Icons.User,
        items: [],
      },
    ],
  },
];
