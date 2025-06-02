import { createBrowserRouter } from "react-router-dom";

import CustomerLayout from "./ui/layouts/customer/CustomerLayout";
import CustomerHome from "./ui/layouts/customer/CustomerHome";
import BookingDetail from "./ui/components/booking/BookingDetail";

import AdminLayout from "./ui/layouts/admin/AdminLayout";
import AdminHome from "./ui/layouts/admin/AdminHome";

import RootLayout from "./ui/layouts/RootLayout";
import RoomDetails from "./ui/components/room/RoomDetails";

import { AppPath } from "./utils/appConstant";
import BookingForm from "./ui/components/booking/BookingForm";
import Error from "./ui/components/error/Error";
import { roomLoader, roomsLoader } from "./loader/roomsLoader";
import BookingTable from "./ui/components/booking/bookingTable/BookingTable";
import { bookingsLoader } from "./loader/bookingLoader";
import { adminLoader } from "./loader/adminLoader";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          element: <CustomerLayout />,
          children: [
            {
              path: AppPath.room.all,
              element: <CustomerHome />,
              errorElement: <Error />,
              loader: roomsLoader
            }, {
              path: AppPath.room.detailsPath,
              element: <RoomDetails />,
              errorElement: <Error />,
              loader: roomLoader
            },
            {
              path: AppPath.booking.detailsPath,
              errorElement: <Error />,
              element: <BookingDetail />,
            }, {
              path: AppPath.booking.new,
              errorElement: <Error />,
              element: <BookingForm />
            }
          ]
        },
        {
          element: <AdminLayout />,
          children: [
            {
              path: AppPath.admin.home,
              errorElement: <Error />,
              element: <AdminHome />,
              loader: adminLoader
            },
            {
              path: AppPath.admin.bookings,
              element: <BookingTable />,
              errorElement: <Error />,
              loader: bookingsLoader
            }
          ]
        }
      ]
    }
  ]
)

export default router;