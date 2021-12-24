import { Button, Select } from "antd";
import Form from "antd/lib/form/Form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheaterByMovieId } from "../../../Redux/thunk/theater.thunk";
import "./OrderTicket.scss";

const OrderTicker = () => {
  const dispatch = useDispatch();
  const { listMovies } = useSelector((state) => state.movie);
  const { showtimesMovie } = useSelector((state) => state.theater);
  const [disabled, setDisabled] = useState(true);
  const { Option } = Select;

  const handleChange = (value) => {
    dispatch(getTheaterByMovieId(value));
    setDisabled(false);
  };

  const showListMovie = (data) => {
    return data.map((item, index) => {
      return (
        <Option value={item.maPhim} key={`film-${index}`}>
          {item.tenPhim}
        </Option>
      );
    });
  };

  const showListTheater = (data) => {
    return data.map((theater, index) => {
      return theater.cumRapChieu.map((item, indexItem) => {
        return (
          <Option value={item.maCumRap} key={`cluter-${item.maCumRap}`}>
            {item.tenCumRap}
          </Option>
        );
      });
    });
  };

  return (
    <div className="orderticket">
      <Form className="order-search">
        <Select
          defaultValue="Phim"
          style={{ width: 240 }}
          onChange={handleChange}
          size="large"
        >
          {showListMovie(listMovies)}
        </Select>

        <Select
          style={{ width: 240 }}
          defaultValue="Rạp"
          disabled={disabled}
          size="large"
        >
          {showtimesMovie.heThongRapChieu &&
            showListTheater(showtimesMovie.heThongRapChieu)}
        </Select>

        <Select
          style={{ width: 240 }}
          defaultValue="Ngày Chiếu"
          disabled={disabled}
          size="large"
        ></Select>
        <Button className="form-button" htmlType="submit" disabled>
          Mua vé Ngay
        </Button>
      </Form>
    </div>
  );
};

export default OrderTicker;
