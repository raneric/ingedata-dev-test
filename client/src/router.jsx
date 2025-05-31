import { createBrowserRouter } from "react-router-dom";

import CustomerLayout from "./ui/layouts/customer/CustomerLayout";
import CustomerHome, { loader as roomsLoader } from "./ui/layouts/customer/CustomerHome";
import BookingDetail from "./ui/layouts/customer/BookingDetail";

import AdminLayout from "./ui/layouts/admin/AdminLayout";
import AdminHome from "./ui/layouts/admin/AdminHome";
import BookingStats from "./ui/layouts/admin/BookingStats";

import RootLayout from "./ui/layouts/RootLayout";
import RoomDetails, { loader as roomLoader } from "./ui/components/room/RoomDetails";

import { ApiPath } from "./utils/appConstant";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          element: <CustomerLayout />,
          children: [
            {
              path: ApiPath.room.all,
              element: <CustomerHome />,
              loader: roomsLoader
            }, {
              path: ApiPath.room.details,
              element: <RoomDetails />,
              loader: roomLoader
            },
            {
              path: ApiPath.booking.details,
              element: <BookingDetail />,
            }
          ]
        },
        {
          element: <AdminLayout />,
          children: [
            {
              path: ApiPath.admin.home,
              element: <AdminHome />,
            },
            {
              path: ApiPath.admin.stats,
              element: <BookingStats />,
            }
          ]
        }
      ]
    }
  ]
)

export default router;