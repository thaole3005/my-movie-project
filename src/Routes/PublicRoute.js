import React from "react";
import UserLayout from "../Layout/UserLayout";

const PublicRoute = ({ children }) => {
  return <UserLayout>{children}</UserLayout>;
};

export default PublicRoute;
