import { createBrowserRouter } from "react-router-dom";

import CustomerLayout from "./ui/layouts/customer/CustomerLayout";
import CustomerHome, { loader as roomsLoader } from "./ui/layouts/customer/CustomerHome";
import BookingDetail from "./ui/components/booking/BookingDetail";

import AdminLayout from "./ui/layouts/admin/AdminLayout";
import AdminHome from "./ui/layouts/admin/AdminHome";
import BookingStats from "./ui/components/booking/BookingStats";

import RootLayout from "./ui/layouts/RootLayout";
import RoomDetails, { loader as roomLoader } from "./ui/components/room/RoomDetails";

import { ApiPath } from "./utils/appConstant";
import BookingForm from "./ui/components/booking/BookingForm";

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
              path: ApiPath.room.detailsPath,
              element: <RoomDetails />,
              loader: roomLoader
            },
            {
              path: ApiPath.booking.detailsPath,
              element: <BookingDetail />,
            }, {
              path: ApiPath.booking.new,
              element: <BookingForm />
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