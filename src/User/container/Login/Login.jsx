import { Button, Col, Form, Input, message, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { actionLogin } from "../../../Redux/thunk/auth.thunk";
import "./Login.scss";

const validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
// Phải có chữ hoa, phải có chữ thương, phải có số, tối thiểu phải 8 ký tự
const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { status, isLoading, isLoggedIn } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    dispatch(actionLogin(values));
  };

  console.log(status);

  useEffect(() => {
    if (!isLoading && !isLoggedIn && status === "login_fail") {
      message.error("Login Failure");
    } else if (!isLoading && isLoggedIn && status === 200) {
      message.success("Login Success");
      history.push("/");
    }
  }, [isLoading, isLoggedIn, status, history]);

  return (
    <div className="login">
      <Row className="login-container" justify="center">
        <Col>
          <Form
            className="login-form"
            name="basic"
            onFinish={onFinish}
            size="large"
          >
            <Form.Item
              label="Username"
              name="taiKhoan"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                () => ({
                  validator(_, value) {
                    if (!value || value.match(validPass)) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("The password that you entered do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Link to="/register" className="form-register">
                Register Account?
              </Link>
            </Form.Item>

            <Form.Item style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit" className="form-button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
