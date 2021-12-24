import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Switch,

} from "antd";
import { useFormik } from 'formik';
import moment from 'moment';
import { GROUP_ID } from '../../../../API/axiosClient';
import { themPhimUploadHinhAction } from "../../../../Redux/thunk/movie.thunk";
// import { addMovieAdmin } from "../../../../Redux/thunk/movie.thunk";

export default function AddNewFilm(props) {

  const [imgSrc, setImgSrc] = useState(null);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      ngayKhoiChieu: '',
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
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
          formData.append("hinhAnh", values.hinhAnh, values.hinhAnh.name);
        }
      }

      // console.log("formData", formData.get('hinhAnh'));

    //   alert("đã thêm phim")

      //Gọi api để đưa formData ng dùng nhập lên server để tạo phim mới
    //   dispatch(addMovieAdmin(formData));
      dispatch(themPhimUploadHinhAction(formData));
      
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


  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    console.log("file", file);

    if(file.type === 'image/jpeg' || file.type ==='image/png' || file.type === 'image/jpg' ) {

      //tạo đối tượng để đọc file
      let reader = new FileReader(); //tạo đối tượng
      reader.readAsDataURL(file); //tiến hành đọc file
      reader.onload = (e) => {
        // console.log("linkImg base64",e.target.result);
        setImgSrc(e.target.result);
      }
    }
    //đưa dữ liệu file vào formik
    formik.setFieldValue("hinhAnh", file)

  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }


  return (
    <div className="mt-4">
      <h2 className="text_center text_red">Trang tạo phim</h2>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        size="default"
        // onSubmitCapture = {formik.handleSubmit}
        onFinish = {formik.handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item 
        label="Tên Phim"
        name="tenPhim"
        rules={[
          {
            required: true,
            message: 'Hãy nhập tên phim!',
          },
        ]}
        >
          <Input name="tenPhim" onChange={formik.handleChange}/>
        </Form.Item>
        <Form.Item 
        label="Trailer"
        name="trailer"
        rules={[
          {
            required: true,
            message: 'Hãy nhập trailer!',
          },
        ]}
        >
          <Input name="trailer" onChange={formik.handleChange}/>
        </Form.Item>
        <Form.Item label="Mô tả"
        name="moTa"
        rules={[
          {
            required: true,
            message: 'Hãy nhập mô tả!',
          },
        ]}
        >
          <Input name="moTa" onChange={formik.handleChange}/>
        </Form.Item>
        <Form.Item 
        label="Ngày khởi chiếu"
        name="ngayKhoiChieu"
        rules={[
          {
            required: true,
            message: 'Hãy nhập ngày khởi chiếu!',
          },
        ]}
        >
            <DatePicker format ={"DD/MM/YYYY"} onChange={handleChangeDatePicker}/>
        </Form.Item>

        <Form.Item label="Đang chiếu" valuePropName="checked" name="dangChieu">
          <Switch name="dangChieu" onChange = { handleChangeSwitch("dangChieu")}/>
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked" name="sapChieu">
          <Switch name="sapChieu" onChange={handleChangeSwitch("sapChieu")}/>
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked" name="hot">
          <Switch name="hot" onChange={handleChangeSwitch("hot")}/>
        </Form.Item>

        <Form.Item label="Số sao"
        name="danhGia"
        rules={[
          {
            required: true,
            message: 'Hãy nhập số sao!',
          },
        ]}
        >
          <InputNumber min={1} max ={10} onChange = {handleChangeInputNumber("danhGia")}/>
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg, image/jpg"/>
          <img style={{width: 200, height: 200}} src= {imgSrc} alt="..."/>
        </Form.Item>

        <Form.Item label="Tác vụ">
          <Button htmlType="submit" >Thêm phim</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
