import React from 'react';
import { Row, Col } from 'antd';
import arrPartner from './arrPartner.json';
import "./Footer.scss"

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="custom_container">
                <Row className="footer_top" gutter={[24, 16]}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="footer_section">
                                <h4 className ="footer_title">
                                    TIX
                                </h4>
                                <Row>
                                    <Col span={12}>
                                        <div className="footer_rule">
                                            <p>
                                                <a>FAQ</a> 
                                            </p>
                                            <p>
                                                <a>Brand Guidelines</a> 
                                            </p>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="footer_rule">
                                            <p>
                                                <a>Chính sách bảo mật</a> 
                                            </p>
                                            <p>
                                                <a>Thỏa thuận sử dụng</a> 
                                            </p>
                                            
                                        </div>
                                    </Col>
                                </Row>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <div className="footer_section footer_section_doitac">
                                    <h4 className="footer_title">ĐỐI TÁC</h4>
                                    <div className="partner_list d-flex">
                                    {
                                    arrPartner.map((partner, index) => {
                                        return  <div className="partner_item" key={index}>
                                            <a href="http://" target="_blank" style ={{}}>
                                                    <img src = {partner.logo} alt="partner"/>
                                                </a>
                                        </div>

                                    })
                                    }
        
                                    </div>
                                
                            </div>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Row>
                                    <Col span ={12}>
                                        <h4 className="footer_title">Mobile APP</h4>
                                        <div className="footer_icon">
                                            <img src="https://tix.vn/app/assets/img/icons/apple-logo.png" alt="apple-icon"/>
                                            <img src="https://tix.vn/app/assets/img/icons/android-logo.png" alt="androi-icon"/>
                                        </div>
                                    </Col>
                                    <Col span ={12}>
                                        <h4 className="footer_title">sOCIAL</h4>
                                        <div className="footer_icon">
                                            <img src="https://tix.vn/app/assets/img/icons/facebook-logo.png" alt="facebook-icon"/>
                                            <img src="https://tix.vn/app/assets/img/icons/android-logo.png" alt="zalo-icon"/>
                                        </div>
                                    </Col>
                        
                        </Row>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}
