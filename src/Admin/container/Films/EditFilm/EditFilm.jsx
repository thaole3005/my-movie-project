import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  
  } from "antd";
import { useFormik } from 'formik';
import { GROUP_ID } from '../../../../API/axiosClient';
import moment from 'moment';
import { getMovieDetail, capNhatPhimUploadAction } from './../../../../Redux/thunk/movie.thunk';
import { useHistory } from "react-router-dom";



export default function EditFilm(props) {
    
    const { movieInfor } = useSelector((state) => state.movie);
    // console.log("movieInfor", movieInfor);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        // console.log("movieId", props.match.params.movieId);
        const maPhim = Number(props.match.params.movieId);
        dispatch(getMovieDetail(maPhim));

    }, [])

  const [imgSrc, setImgSrc] = useState(null);

    
  const formik = useFormik({
      enableReinitialize: true, //mặc định sẽ là false, chỉ nên để true trong edit form
    initialValues: {
      maPhim: movieInfor?.maPhim,
      tenPhim: movieInfor?.tenPhim,
      trailer: movieInfor?.trailer,
      moTa: movieInfor?.moTa,
      ngayKhoiChieu: movieInfor?.ngayKhoiChieu,
      dangChieu: movieInfor?.dangChieu,
      sapChieu: movieInfor?.sapChieu,
      hot: movieInfor?.hot,
      danhGia: movieInfor?.danhGia,
      hinhAnh: null, //nếu k thay đổi hình ảnh thì khi truyền trường hinhAnh là null khi call api thì backend sẽ giữ lại hình ảnh cũ
      maNhom: GROUP_ID,
    },
    onSubmit: values => {
      console.log("values khi submit", values);
      
      //tạo đói tượng formData
      let formData = new FormData();
      //tạo vòng lặp duyệt qua các giá trị của object values và đưa nó vào formData băng phương thức append 
      for(let key in values) {
        if(key!== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
            if(values.hinhAnh !== null) {
                //nếu ng dùng có update hình ảnh thì mới append file hinhAnh vào form data, còn không thì hinhAnh vẫn là null
                formData.append("hinhAnh", values.hinhAnh, values.hinhAnh.name);
            }
        }
      }

      console.log("formData", formData.get('hinhAnh'));

      //Gọi api updatePhim để đưa formData ng dùng update lên server để tạo phim mới
      dispatch(capNhatPhimUploadAction(formData));
      history.push("/admin/films");
    },
  });


  
  const handleChangeDatePicker = (valueDate) => {
    // console.log("valueDate", valueDate);
    //valueDate nhận được là 1 object Moment, nhưng api cần gtri là 1 string date => chuyển đổi kiểu dữ liệu
    console.log("date changed", moment(valueDate).format("DD/MM/YYYY"));
    formik.setFieldValue("ngayKhoiChieu", moment(valueDate).format("DD/MM/YYYY"));
  }


  const handleChangeSwitch = (name) => {
    return (switchValue, e) => {
      // console.log(name, switchValue);
      formik.setFieldValue(name, switchValue);
    }
  }

  const handleChangeInputNumber = (name) => {
    return (inputNumberValue) => {
      formik.setFieldValue(name, inputNumberValue);
    }
  }


  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    console.log("file", file);

    if(file.type === 'image/jpeg' || file.type ==='image/png' || file.type === 'image/jpg' ) {
      //đưa dữ liệu file vào formik
      //await để đảm bảo đưa dữ liệu vào  formik rồi thì mới đến load ảnh ra giao diện, vì setFieldValue và onload là 2 phương thức bất đồng bộ, nên cần có await để tránh bất đồng bộ
      await formik.setFieldValue("hinhAnh", file)
      
        //tạo đối tượng để đọc file và hiển thị ra giao diện ảnh ng dùng chọn
      let reader = new FileReader(); //tạo đối tượng
      reader.readAsDataURL(file); //tiến hành đọc file
      reader.onload = (e) => {
        // console.log("linkImg base64",e.target.result);
        setImgSrc(e.target.result);     //link img base64
      }
    }
    

  }


  console.log("formik.values", formik.values);


    return (
        <div className="mt-4">
        <h2 className="text_center text_red">Trang cập nhật phim {movieInfor.tenPhim}</h2>
        <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        size="default"
        onSubmitCapture = {formik.handleSubmit}
      >
        <Form.Item 
        label="Tên Phim"
       
        >
          <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim}/>
        </Form.Item>
        <Form.Item 
        label="Trailer"
       
        >
          <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer}/>
        </Form.Item>
        <Form.Item label="Mô tả"
       
        >
          <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa}/>
        </Form.Item>
        <Form.Item 
        label="Ngày khởi chiếu"
       
        >
            <DatePicker format="DD/MM/YYYY" onChange={handleChangeDatePicker}
             value={moment(formik.values.ngayKhoiChieu)}/>
        </Form.Item>

        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch name="dangChieu" onChange = { handleChangeSwitch("dangChieu")} checked={formik.values.dangChieu}/>
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch name="sapChieu" onChange={handleChangeSwitch("sapChieu")} checked={formik.values.sapChieu}/>
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch name="hot" onChange={handleChangeSwitch("hot")} checked={formik.values.hot}/>
        </Form.Item>

        <Form.Item label="Số sao"
   
        >
          <InputNumber min={1} max ={10} onChange = {handleChangeInputNumber("danhGia")} value={formik.values.danhGia}/>
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg, image/jpg"/>
          <img style={{width: 200, height: 200}} src= {imgSrc === null ? movieInfor.hinhAnh : imgSrc} alt="..."/>
        </Form.Item>

        <Form.Item label="Tác vụ">
          <Button htmlType="submit">Update phim</Button>
        </Form.Item>
      </Form>
      </div>
    )
}
