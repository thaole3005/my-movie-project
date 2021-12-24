import React from "react";

export const userRouter = [
  {
    path: "/",
    component: React.lazy(() => import("../User/container/HomePage/HomePage")),
  },
  {
    path: "/moviedetail/:movieId",
    component: React.lazy(() =>
      import("../User/container/MovieDetail/MovieDetail.jsx")
    ),
  },
  {
    path: "/login",
    component: React.lazy(() => import("../User/container/Login/Login")),
  },
  {
    path: "/register",
    component: React.lazy(() => import("../User/container/Register/Register")),
  },
  {
    path: "/ticketroom/:maLichChieu",
    component: React.lazy(() =>
      import("../User/container/BookingMovie/BookingMovie")
    ),
  },
  {
    path: "/user-profile",
    component: React.lazy(() =>
      import("../User/container/UserProfile/UserProfile")
    ),
  },
];



export const adminRouter = [
  {
    path: "/admin/dashboard",
    component: React.lazy(() => import("../Admin/container/Dashboard/Dashboard")),
  },

  {
    path: "/admin/films",
    component: React.lazy(() => import("../Admin/container/Films/Films")),
  },
  {
    path: "/admin/films/editfilm/:movieId",
    component: React.lazy(() => import("../Admin/container/Films/EditFilm/EditFilm")),
  },
  {
    path: "/admin/films/showtime/:movieId/:tenphim",
    component: React.lazy(() => import("../Admin/container/Films/ShowTime/ShowTime")),
  },

  {
    path: "/admin/films/addnewfilm",
    component: React.lazy(() => import("../Admin/container/Films/AddNewFilm/AddNewFilm")),
  },
  {
    path: "/admin/users",
    component: React.lazy(() => import("../Admin/container/Users/Users")),
  },
  {
    path: "/admin/users/addnewuser",
    component: React.lazy(() => import("../Admin/container/Users/AddNewUser/AddNewUser")),
  },

  // {
  //   path: "/admin/orders",
  //   component: React.lazy(() => import("../Admin/pages/Orders/OrderAdmin")),
  // },
];
