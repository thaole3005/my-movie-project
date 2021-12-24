import React from "react";
import { Row, Col, Divider } from "antd";
import "./TicketRoom.scss";

export default function SeatNote() {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={2}>
          {/* <div>col-2</div> */}
        </Col>
        <Col className="gutter-row" span={4}>
            <div>
            <button className="ghe">
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="couch"
                role="img"
                viewBox="0 0 640 512"
            >
                <path
                fill="currentColor"
                d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                ></path>
            </svg>
            </button>
            <p>Thường</p>
        </div>
        </Col>

        <Col className="gutter-row" span={4}>
            <div>
                <button className="ghe gheVip">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="couch"
                    role="img"
                    viewBox="0 0 640 512"
                >
                    <path
                    fill="currentColor"
                    d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                    ></path>
                </svg>
                </button>
                <p>VIP</p>
        </div>
        </Col>


        <Col className="gutter-row" span={4}>
            <div>
                <button className="ghe gheDangChon">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="couch"
                    role="img"
                    viewBox="0 0 640 512"
                >
                    <path
                    fill="currentColor"
                    d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                    ></path>
                </svg>
                </button>
                <p>Ghế đang chọn</p>
            </div>

        </Col>


        <Col className="gutter-row" span={4}>
            <div>
                <button className="ghe gheDaDat">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="couch"
                    role="img"
                    viewBox="0 0 640 512"
                >
                    <path
                    fill="currentColor"
                    d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                    ></path>
                </svg>
                </button>
            <p>Ghế đã đặt</p>
        </div>
        </Col>


        <Col className="gutter-row" span={4}>
            <div>
                <button className="ghe gheToiDaDat">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="couch"
                    role="img"
                    viewBox="0 0 640 512"
                >
                    <path
                    fill="currentColor"
                    d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                    ></path>
                </svg>
                </button>
                <p>Ghế tôi đã đặt</p>
            </div>
        </Col>


        <Col className="gutter-row" span={2}>
          {/* <div>col-2</div> */}
        </Col>
      </Row>

     
    </>
  );
}
