import { AutoComplete, Button, Form, Input, message, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createUser } from "../../../Redux/thunk/user.thunk";
import "./Register.scss";

const { Option } = Select;
const valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
// Phải có chữ hoa, phải có chữ thương, phải có số, tối thiểu phải 8 ký tự
const validEmail =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validPhone =
  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

function Register() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isLoading, status } = useSelector((state) => state.user);
  const history = useHistory();
  const [result, setResult] = useState([]);

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

  const handleCreateCustomer = (value) => {
    const customer = {
      taiKhoan: value.taiKhoan,
      hoTen: value.hoTen,
      maNhom: value.maNhom,
      soDt: `${value.prefix}${value.soDt}`,
      email: value.email,
      matKhau: value.matKhau,
    };

    dispatch(createUser(customer));
  };

  console.log(status);

  useEffect(() => {
    if (!isLoading && status) {
      if (status === "Register_Success") {
        history.push("/login");
      } else {
        message.success("Register failure!");
      }
    }
  }, [isLoading, status, history]);

  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map(
        (domain) => `${value}@${domain}`
      );
    }

    setResult(res);
  };

  return (
    <div className="register">
      <Form
        className="register-form"
        {...formItemLayout}
        form={form}
        name="register"
        initialValues={{
          prefix: "84",
        }}
        onFinish={handleCreateCustomer}
        scrollToFirstError
      >
        <Form.Item
          name="taiKhoan"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: false,
            },
          ]}
        >
          <Input placeholder="Please input your username" />
        </Form.Item>

        <Form.Item
          name="hoTen"
          label="Fullname"
          rules={[
            {
              required: true,
              message: "Please input your fullname!",
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Please input your fullname" />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your E-mail!",
            },
            () => ({
              validator(_, value) {
                if (!value || value.match(validEmail)) {
                  return Promise.resolve();
                }

                return Promise.reject();
              },
            }),
          ]}
        >
          <AutoComplete
            onSearch={handleSearch}
            placeholder="Please input your email"
          >
            {result.map((email) => (
              <Option key={email} value={email}>
                {email}
              </Option>
            ))}
          </AutoComplete>
        </Form.Item>

        <Form.Item
          name="matKhau"
          label="Password"
          rules={[
            {
              required: true,
              min: 8,
              message: "Please input your password!",
            },
            () => ({
              validator(_, value) {
                if (!value || value.match(valid)) {
                  return Promise.resolve();
                }

                return Promise.reject();
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Please input your password" />
        </Form.Item>

        <Form.Item
          name="soDt"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
            () => ({
              validator(_, value) {
                if (!value || value.match(validPhone)) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error(
                    "The two phone number that you entered do not match!"
                  )
                );
              },
            }),
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
            placeholder="Please input your phone number"
          />
        </Form.Item>

        <Form.Item
          name="maNhom"
          label="Code Group"
          rules={[
            {
              required: true,
              message: "Please input your code group!",
              whitespace: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="GP01">GP01</Select.Option>
            <Select.Option value="GP02">GP02</Select.Option>
            <Select.Option value="GP03">GP03</Select.Option>
            <Select.Option value="GP04">GP04</Select.Option>
            <Select.Option value="GP05">GP05</Select.Option>
            <Select.Option value="GP06">GP06</Select.Option>
            <Select.Option value="GP07">GP07</Select.Option>
            <Select.Option value="GP08">GP08</Select.Option>
            <Select.Option value="GP09">GP09</Select.Option>
            <Select.Option value="GP10">GP10</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout} style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit" className="form-button">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
