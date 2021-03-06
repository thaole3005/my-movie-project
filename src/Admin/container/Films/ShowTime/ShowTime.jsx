import React, {useEffect, useState} from 'react';
import { Form, Input, Button, Select, DatePicker, InputNumber  } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';
import Axios from 'axios';
import { TOKEN_CYBERSOFT } from '../../../../API/axiosClient';
import { createCalendarMovieByAdmin } from '../../../../Redux/thunk/ticket.thunk';

export default function ShowTime(props) {


    const [state, setState] = useState({
        arrHeThongRapChieu: [],
        arrCumRapChieu: [],
    })
    // console.log("state", state)
    
    const dispatch = useDispatch();
    
    useEffect(async () => {


        try {
            const {data, status} = await Axios({
                url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
                method: 'GET',
                headers: {
                  "TokenCybersoft": TOKEN_CYBERSOFT,
                  'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                }
    
            });
            if(status === 200) {
                setState({
                    ...state,
                    arrHeThongRapChieu: data.content,
                })
            }
        } catch (error) {
            console.log("error", error.response?.data);
        }

      
    }, [])
    
    

    const formik = useFormik({
        initialValues: {
         maPhim: props.match.params.movieId,
         ngayChieuGioChieu: '',
         maRap: '', 
         giaVe: '',
        },
         onSubmit: async (values) => {
             console.log("values khi submit", values);
             dispatch(createCalendarMovieByAdmin(values));
         }
     })
    
     

    const convertOptionHTR = () => {
        return state.arrHeThongRapChieu?.map((htr, index) => {
            return {label: htr.tenHeThongRap, value: htr.maHeThongRap};
        })
    }

    const handleChangeHeThongRap = async (valueHtr, optionHtr) => {
        // console.log("valueHtr", valueHtr);
        // console.log("optionHtr", optionHtr);
        //khi ng d??ng ch???n h??? th???ng r???p th?? l???y valueHtr ng d??ng ch???n call api l???y c???m r???p
        try {
            const {data, status} = await Axios({
                url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${valueHtr}`,
                method: 'GET',
                headers: {
                  "TokenCybersoft": TOKEN_CYBERSOFT,
                  'Authorization': 'Bearer ' + localStorage.getItem("accessToken"),
                }
    
            });
            if(status === 200) {
                setState({
                    ...state,
                    arrCumRapChieu: data.content,
                })
            }
        } catch (error) {
            console.log("error", error.response?.data);
        }
    }


    const handleChangeCumRap = (valueCumRap) => {
        // console.log("valueCumRap", valueCumRap);
        formik.setFieldValue("maRap", valueCumRap);
    }

  
    const onChangeDatePicker = (value, dateString) => {
        // console.log('Selected Time: ', value);
        // console.log('dateString ', dateString);
        formik.setFieldValue("ngayChieuGioChieu", dateString);


      }

      const onOk =(valueDate) => {
        // console.log('onOk: ', valueDate); //valueDate l?? 1 ?????i t?????ng Moment
        // console.log("valueDate format", moment(valueDate).format("DD/MM/YYYY hh:mm:ss"))
        formik.setFieldValue("ngayChieuGioChieu", moment(valueDate).format("DD/MM/YYYY hh:mm:ss"));
      }



    const onChangeInputNumber = (valueNumber) => {
        console.log('valueNumber', valueNumber);
        formik.setFieldValue("giaVe", valueNumber);
    }


    return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onSubmitCapture = {formik.handleSubmit}
      autoComplete="off"
    >
        <h3 className="text-center">TRANG T???O L???CH CHI???U <p className="movieName_showtime mt-2">{props.match.params.tenphim}</p></h3>

      <Form.Item label="H??? th???ng r???p" >
        <Select options={convertOptionHTR()} 
        onChange={handleChangeHeThongRap} placeholder="CH???n h??? th???ng r???p"/>
      </Form.Item>

      <Form.Item label="C???m r???p" >
        <Select  placeholder="Ch???n c???m r???p"
        options = {
            state.arrCumRapChieu?.map(cumRap => ({label: cumRap.tenCumRap, value: cumRap.maCumRap}))
        }
        onChange = {handleChangeCumRap}
        />
      </Form.Item>

      <Form.Item label="Ng??y chi???u gi??? chi???u" >
        <DatePicker showTime format="DD/MM/YYYY hh:mm:ss"
        onChange={onChangeDatePicker} onOk={onOk} />
      </Form.Item>

      <Form.Item label="G??a v??" >
        <InputNumber min={75000} max={150000} onChange={onChangeInputNumber} />
      </Form.Item>

      <Form.Item label="T??c v???">
        <Button htmlType="submit">T???o l???ch chi???u</Button>
      </Form.Item>
    </Form>
    )
}
