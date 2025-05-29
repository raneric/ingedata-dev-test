import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "./ui/layouts/customer/CustomerLayout";
import CustomerHome from "./ui/layouts/customer/CustomerHome";
import BookingDetail from "./ui/layouts/customer/BookingDetail";
import AdminLayout from "./ui/layouts/admin/AdminLayout";
import AdminHome from "./ui/layouts/admin/AdminHome";
import BookingStats from "./ui/layouts/admin/BookingStats";
import RootLayout from "./ui/layouts/RootLayout";


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
              path: '/customer',
              element: <CustomerHome />,
            },
            {
              path: '/customer/booking/:id',
              element: <BookingDetail />,
            }
          ]
        },
        {
          element: <AdminLayout />,
          children: [
            {
              path: '/admin',
              element: <AdminHome />,
            },
            {
              path: '/admin/stats',
              element: <BookingStats />,
            }
          ]
        }
      ]
    }
  ]
)

export default router;