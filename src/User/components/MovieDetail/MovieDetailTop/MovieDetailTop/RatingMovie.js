import React from "react";
import { CircularProgressbar, buildStyles  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Rate } from 'antd';
import {useSelector } from "react-redux";
import "./RatingMovie.scss";

export default function RatingMovie() {

  const { movieInfor } = useSelector((state) => state.movie);


  return (
    <div className="movie_rating">
        <div>

            <CircularProgressbar value={movieInfor.danhGia*10}
            text={`${movieInfor.danhGia*10}%`}
            styles={buildStyles({
                pathColor: '#108f3e',
                textColor: '#108f3e',
            })}
            />

            <div className="rating_start_group">
                <Rate allowHalf disabled value={movieInfor.danhGia/2} />
                <h3 className="half">1/2</h3>
            </div>
        </div>
    </div>
  );
}
