import React, {Fragment} from 'react';
import { Row, Col } from 'antd';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/autoplay/autoplay.scss'; // Pagination module
import { Autoplay } from 'swiper';
import arrImgSlidePhone from './arrImgSlidePhone.json';
import phone from '../../../assets/img/mobile.png';
import "./AppTix.scss";
import Button from '../Button/Button';

export default function AppTix() {
    return (
        <div className="app_tix_container">
            <div className = "custom_container">
            <Row className="app_tix_row">
                <Col xs={24} sm={24} md={12} lg={12} xl={12} className="left_col">
                    <div className="app_tix_left">
                        <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                        <p className="tix_description">
                            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                            và đổi quà hấp dẫn.
                        </p>
                        <div>
                            <Button customclass="btn_download">
                            <a
                            href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                            target="_blank"
                            >App miễn phí - Tải về ngay!</a>
                            </Button>
                        </div>
                        <p className="mt-3">
                            TIX có hai phiên bản
                            <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                            target="_blank" className="tix_verson">
                            iOS
                            </a>
                            &amp;
                            <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                            target="_blank" className="tix_verson">
                            Android
                            </a>
                        </p>
                    </div>
                </Col>
               
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <div className="app_tix_right">
                <div className="phone">
                    <img src={phone} className="phone_img" alt="phone_img"/>
                    <div className="phone_slide">
                    <Swiper
                    className="text-info"
                        spaceBetween={50}
                        slidesPerView={1}
                        modules={[ Autoplay ]}
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                          }}
                        
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            arrImgSlidePhone.map((item, index) => {
                                return <Fragment key={`slide ${index}`}>
                                    <SwiperSlide>
                                        <img src={item.imgSlide} className="img_phone_slide" alt="phone_slide"/>
                                    </SwiperSlide>

                                </Fragment>
                            })
                        }
                    </Swiper>
                </div>
                </div>

                
            </div>
                </Col>
            </Row>
            </div>
            
        </div>
    )
}
