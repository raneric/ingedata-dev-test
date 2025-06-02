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
import BookingList from "./ui/components/booking/BookingList";
import { bookingsLoader } from "./loader/bookingLoader";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          element: <CustomerLayout />,
          errorElement: <Error />,
          children: [
            {
              path: AppPath.room.all,
              element: <CustomerHome />,
              loader: roomsLoader
            }, {
              path: AppPath.room.detailsPath,
              element: <RoomDetails />,
              loader: roomLoader
            },
            {
              path: AppPath.booking.detailsPath,
              element: <BookingDetail />,
            }, {
              path: AppPath.booking.new,
              element: <BookingForm />
            }
          ]
        },
        {
          element: <AdminLayout />,
          errorElement: <Error />,
          children: [
            {
              path: AppPath.admin.home,
              element: <AdminHome />,
            },
            {
              path: AppPath.admin.bookings,
              element: <BookingList />,
              loader: bookingsLoader
            }
          ]
        }
      ]
    }
  ]
)

export default router;