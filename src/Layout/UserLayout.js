import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListBanner, getListMovie } from "../Redux/thunk/movie.thunk";
import { getListTheater } from "../Redux/thunk/theater.thunk";
import DrawAntd from "../User/components/DrawAntd/DrawAntd";
import Header from "../User/components/Header/Header";
import ModalAntd from "../User/components/ModalAntd/ModalAntd";
import LayoutContent from "../User/LayoutContent/LayoutContent";
import Footer from './../User/components/Footer/Footer';
import { useLocation } from "react-router-dom";


const UserLayout = ({ children }) => {
  const dispatch = useDispatch();
  let {pathname} = useLocation();


  useEffect(() => {
    dispatch(getListBanner());
    dispatch(getListMovie());
    dispatch(getListTheater());
  }, [dispatch]);

  console.log("vào UserLayout");

  if(pathname.includes("ticketroom")) {
    console.log("vào booking");
    return (
      <div className="userLayout">
        <LayoutContent> {children}</LayoutContent>
        <ModalAntd/>
        <DrawAntd/>
      </div>
    );
  }

  return (
    <div className="userLayout">
      <Header />
      <LayoutContent> {children}</LayoutContent>
      <ModalAntd/>
      <DrawAntd/>
      <Footer/>
    </div>
  );
};

export default UserLayout;
